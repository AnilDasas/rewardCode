const Express = require("express");
const {
  addReward,
  fetchRecordByUserId,
  getAllRecord,
  getPerMonthReord,
  getThreeMonthsRecord,
} = require("../Provider/UserProvider");
const userRouter = Express.Router();

userRouter.get("/getRecord/:userId", (request, response, next) => {
  const data = fetchRecordByUserId(request.params.userId);
  response.send(data);
});

userRouter.get("/getAllRecord", (request, response, next) => {
  const data = getAllRecord();
  response.send(data);
});
userRouter.post("/addReward", (request, response, next) => {
  const data = addReward(request.body);
  response.send(data);
});

userRouter.get("/getThreeMonthsRecord/:userId", (request, response, next) => {
  const data = getThreeMonthsRecord(request.params.userId);
  response.send(data);
});
userRouter.get("/getPerMonthRecord/:userId", (request, response, next) => {
  const data = getPerMonthReord(request.params.userId);
  response.send(data);
});

module.exports ={userRouter}