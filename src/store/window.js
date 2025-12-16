import { WINDOW_CONFIG, INITIAL_Z_INDEX } from '@constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG, 
        nextZIndex: INITIAL_Z_INDEX + 1,
        openWindow: (windowKey, data = null) => set((state) => {
            if (!state.windows[windowKey]) {
                console.error(`Window ${windowKey} not found`)
                return;
            }
            const win = state.windows[windowKey]
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data
            state.nextZIndex++
        }),

        closeWindow: (windowKey) => set((state) => {
            if (!state.windows[windowKey]) {
                console.error(`Window ${windowKey} not found`)
                return;
            }

            const win = state.windows[windowKey]
            win.isOpen = false
            win.zIndex = INITIAL_Z_INDEX
            win.data = null
        }),

        focusWindow: (windowKey) => set((state) => {
            if (!state.windows[windowKey]) {
                console.error(`Window ${windowKey} not found`)
                return;
            }
            const win = state.windows[windowKey]
            if (!win.isOpen) return;
            win.zIndex = state.nextZIndex++;
            })
    }))
)

export default useWindowStore