import express from "express";
import getPayLoadClient from "./getPayLoads";
import { nextHandler, nextApp } from "./next-utils";
const app = express();
const PORT = Number(process.env.PORT || 3000);

const start = async () => {
  const payload = await getPayLoadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL}`);
      },
    },
  });
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info("NextJs started");

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.Js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};
start();
