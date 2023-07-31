import { rest } from "msw";

const baseURL = "https://moments-ara-ef26b303c308.herokuapp.com/";

export const handlers = [
	rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
		return res(
			ctx.json({
				pk: 1,
				username: "aldwin",
				email: "",
				first_name: "",
				last_name: "",
				profile_id: 1,
				profile_image:
					"https://res.cloudinary.com/dhign8ar8/image/upload/v1/media/images/default_profile_h3usch",
			})
		);
	}),
	rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
		return res(ctx.status(200));
	}),
];
