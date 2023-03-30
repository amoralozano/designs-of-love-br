import clerk from "../clerk";

const requireAuth = (handler) => async (req, res) => {
  try {
    const { user } = await clerk.session.checkAuth({
      required: true,
      res,
      req,
    });
    req.user = user;
    return handler(req, res);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Not authorized" });
  }
};

export default requireAuth;
