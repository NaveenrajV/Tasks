function formatDate(date,dateFormat){
  
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

   let dd = date.getDate()
   let mm = date.getMonth()
   const yy = date.getFullYear()
   

  // Formatting month
  if(dateFormat.includes('mmm'))
    dateFormat = dateFormat.replace('mmm',months[mm]);
  else{
    mm = Number(mm)+1;
    mm =  mm<10 ?`0${mm}`: mm;
    dateFormat = dateFormat.replace('mm',mm);
  }

   // Formatting date
   dd = dd<10 ?`0${dd}`: dd;
   dateFormat = dateFormat.replace('dd',dd);

   // Formatting year
   dateFormat = dateFormat.replace('yyyy',yy);

   return dateFormat
}
  console.log(formatDate(new Date(),"dd-mm-yyyy"))
  console.log(formatDate(new Date(),"mm-dd-yyyy"))
  console.log(formatDate(new Date(),"mm/dd/yyyy"))
  console.log(formatDate(new Date(),"dd mmm, yyyy"))
  console.log(formatDate(new Date(),"mmm, yyyy"))
