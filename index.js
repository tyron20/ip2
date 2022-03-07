function akanS(){
    let dis = document.getElementById('answer')
    let date = document.getElementById('date').value;
    let male = document.getElementById('male')
    let female = document.getElementById('female')



    let akanmalenames= [
         'Kwasi',

         'Kwadwo',
        
         'Kwabena',
        
         'Kwaku',
        
          'Yaw',
        
         'Kofi',
        
         'Kwame',
    ];
    let akanfemalenames = [
         'Akosua',

         'Adwoa',
        
         'Abenaa',
        
          'Akua',
        
          'Yaa',
        
         'Afua',
        
         'Ama',
    ];




    let d = new Date(date)
    let day = d.getDay()
  
    //console.log(akanmalenames[day]);
    dis.innerHTML = akanfemalenames[day]
    dis.innerHTML = akanmalenames[day]
}
