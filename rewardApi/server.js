const cors = require("cors")
const Express = require("express")
const {userRouter} = require("./server/Controllers/UserController");

const app = Express();
app.use(cors());
app.use(Express.static(__dirname));
app.use(Express.json())
app.use('/api/v1/user',userRouter);

app.use((err, req, res, next) => {
    handleError(err, res);
  });
  app.listen(8081,()=>console.log('Http server started on port '+8081))
