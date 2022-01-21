const exibirValoresFormData(formData){
  // Display the key/value pairs
  for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
}

const retornaValoresFormData(formData){
  // Display the key/value pairs
  let array=[];
  for (var pair of formData.entries()) {
    array[pair[0]]=pair[1];
  }
  return array;
}
