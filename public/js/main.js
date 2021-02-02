const formEl = document.querySelector('.mainform');
const statusEl = document.querySelector('.status');

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  const params = new FormData(formEl);
  axios.post('/', params)
  .then( (r) => {
    console.log(r);
    if (r.data.length !== 10) {
      statusEl.innerHTML = r.data.reduce((total, current) =>{
        return `${total}  ${current.errorText}`
      }, '');
    } else {
      statusEl.innerHTML = r.data;
    }
    document.querySelectorAll('.inputs').forEach(el => {
      el.classList.remove('inputs-novalid');
    });
    r.data.forEach(el => {
      document.querySelector(el.inputName).classList.add('inputs-novalid');
    });
  });
});