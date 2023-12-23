export default function handleSignup(req, res) {
  if (req.method == 'POST')
  {
    const reqPayload = req?.body;
    console.log("reqPayload: ", reqPayload);
    return res.json({msg: "request was recieved"});
    //return res.json(reqPayload);
  };
  return res.status(500);
};