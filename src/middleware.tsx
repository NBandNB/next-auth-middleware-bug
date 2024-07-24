import {auth} from "@/auth";

export default auth((req) => {
    console.log("Middleware", req.auth);
})