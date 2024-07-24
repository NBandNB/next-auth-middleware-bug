import NextAuth from "next-auth";

export const {auth } = NextAuth(() => {
    return {
        providers: [],
        secret: "a16116c91c087f63a653852798e09202c46fa0e0",
    };
});