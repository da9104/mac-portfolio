import { Client } from '@notionhq/client';
import { loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')

const notion = new Client({
  auth: env.NOTION_TOKEN,
  // notionVersion: '2022-06-28',
});

const DATABASE_ID = env.NOTION_DATABASE_ID

const DATA_SOURCE_ID = env.NOTION_DATA_SOURCE_ID

export async function getDatabaseMetadata() {
  try {
    if (!DATABASE_ID) throw new Error("DATABASE_ID is missing from .env");

    const response = await notion.databases.retrieve({
      database_id: DATABASE_ID
    });


    const dataSources = response.data_sources
    console.log(dataSources)
    // return response;
    console.log(response)
  } catch (error) {
    console.error("Notion API Error:", error.body || error.message);
    throw error;
  }
}


export async function getDatabaseContents() {
  try {

    const response = await notion.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      filter: {
        "property": "Published",
        "checkbox": {
          "equals": true
        }
      },
      sorts: [
      {
        property: "PublishedDate",
        direction: "descending"
      }
      ],
    });

     if (!response.results.length) {
           throw new Error(`Notion API HTTP error! Status: ${response.results}`);
     }

    return response.results

  } catch (error) {
    console.error("Detailed Query Error:", error);
    return { results: [] };
  }
}