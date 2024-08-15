function Hello(){

  //Dynamic Component
  let myName = 'Aishwarya';
  let number = 456;
  let fullNmae = () =>{
    return 'Aishwarya Ambule'
  }
return <h3>
    MessageNo: {number} I am master {fullNmae()}
  </h3>
}
export default Hello;