const testMiddleWare = (req, res) => {
  console.log('req from controller:', req.body);
  res.send('Все верно!');
}
const showStartPage = (req, res) => {
  res.render('index'); 
};

module.exports = {
  testMiddleWare,
  showStartPage
}