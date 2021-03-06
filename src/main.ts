import serverStart from "./app";
import connectDb from "./db";
import {dbConfig, logConfig, serverConfig} from "./config";

/**
 * 聊天室主引导文件
 * **/
async function start(){
  await connectDb(dbConfig);
  console.info('db connected');
  await serverStart(serverConfig, logConfig);
}

start().catch(e => {
  console.log(e);
  process.exit(1);
});