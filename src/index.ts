import Koa from "koa";
import Router from "@koa/router";


const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
	ctx.body = {
		hello: "world"
	}
});

app.use(router.routes())

app.listen(3000, () => {
	console.log("start")
});