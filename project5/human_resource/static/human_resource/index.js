document.addEventListener("DOMContentLoaded", function(){
  front_page();


 
    }) ;
document.addEventListener("DOMContentLoaded", function(){
application();
});

document.addEventListener("DOMContentLoaded", function(){
  sidebar_profile();

  //  chatbox();
 
  // user_dtl();
  all_users();
});


function front_page() {
      console.log("front_page");
      const reg= document.querySelector('#reg');
      // const reg_block= document.querySelector('.class-reg');
      const reg_block= document.getElementById('id-reg');
      console.log(reg_block);
      reg_block.style.display="none";
       reg.onclick=function(e){   
          // e.preventDefault();
          // e.stopPropagation();
        if(reg_block.style.display=="block")
       { reg_block.style.display = 'none';}
       else
          {reg_block.style.display = 'block';}

          
           }
        };


document.addEventListener("DOMContentLoaded", function(){           
// function new_picture(){
  const div_upld=document.querySelector("#div-upld");
  console.log(div_upld);
  const form_upld=document.querySelector("#form-upld");
  console.log(form_upld)
  const csrftoken_upld=document.querySelector('[name=csrfmiddlewaretoken]').value;
  console.log(csrftoken_upld)
  const submit_upld=document.querySelector("#submit-upld");
  form_upld.style.display='none';
  div_upld.onclick=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    // const form_upld=document.getElementById("form-upld");
  
    if(form_upld.style.display=='none'){
      form_upld.style.display='block';
      
      submit_upld.onclick=function(e){
       
        e.stopPropagation()
        e.preventDefault()
       
        const img_id = JSON.parse(document.getElementById('user_id').textContent);
        console.log(img_id)
    
        
        
        // const newpic=document.getElementById("newpic").files[0].name;
         const newpic=document.getElementById("newpic")
        const csrftoken_upld=document.querySelector('[name=csrfmiddlewaretoken]').value;
      
        const form_upld=document.getElementById("form-upld");
        //  var newupd=new FormData(document.querySelector('#form-upld'));
        console.log(form_upld)
        var formdata = new FormData(form_upld);  

        
       
         console.log(formdata);
        // for (var [key, value] of formData.entries()) { 
        //   console.log(key, value);}
        console.log(newpic)
      
        console.log(csrftoken_upld)
         fetch(`${img_id}/new_picture`,
      
              {method:'UPDATE',
               body:formdata,
              //  body:JSON.stringify({newpic:newpic}),
               headers:{'Content-Type':'multipart/form-data',
                         'X-CSRFToken':csrftoken_upld}})
               .then(response => response.json())
               .then(data=>{console.log(data)
                // const img=data[2]['avatar'];
                // console.log('where is the img')
                // console.log(img)
                // const div_upld=document.querySelector('#div-upld');
                // const img_div = document.createElement('img');
                // img.id='img-div';
                // img_div.setAttribute('src',`${img}`)
                // console.log(img_div)
                // div_upld.appendChild(img_div)

              })
       form_upld.style.display='none';
      //  const div_upld=document.querySelector('#div-upld');
      //  const img_div = document.createElement('img');
      //  img.id='img-div';
      //  img_div.setAttribute('src',)


      }
    }
  // }
}           
})   

function sidebar_profile(){

 
// sidebar char and leave 
       var leave_main= document.querySelector("#leave-main");
       var stat=document.querySelector("#stat");
       const leave=document.querySelector(".leave");
       const onleave=document.querySelector(".onleave");
       const chart=document.querySelector("#chart");
       const leave_form=document.querySelector("#leave-form");
       const leave_btn_ask=document.querySelector(".leave-btn-ask");
       const leave_btn_back=document.querySelector(".leave-btn-back")
       var time_keeping=document.querySelector("#time-keeping");
       const time_keeping_div=document.querySelector(".time-keeping-div");
      //  const apl_form=document.querySelector("#apl-form");
      
       chart.style.display='block';
       leave.style.display='none';
       time_keeping_div.style.display='none';

       leave_main.onclick=(e)=>{
      
       e.preventDefault();
       e.stopPropagation();
       leave.style.display='block';
       chart.style.display='none';
       time_keeping_div.style.display='none';
       

    //    leave_btn_ask.style.display='block';
    //    leave_btn_back.style.display='block';
       leave_form.style.display='none';
       leave_btn_back.style.display='none';
       onleave.style.display='none';

      leave_btn_ask.onclick=()=>{
        // e.stopPropagation();
        // e.preventDefault();
        leave_form.style.display='block'
       leave_form.onsubmit=(e)=>{ 
        e.stopPropagation();
        e.preventDefault();
  
        onleave.style.display='block';
        leave_btn_ask.style.display='none';
        chart.style.display='none';
        leave_form.style.display='none'
        leave_btn_back.style.display='block'
        leave_btn_back.onclick=()=>{
        leave_btn_ask.style.display='block';
        leave_btn_back.style.display='none';
        onleave.style.display='none'}}
       }
       }

       var leave_main= document.querySelector("#leave-main");
       var stat=document.querySelector("#stat");
      //  const trial=document.querySelector('#trial')
      stat.onclick=()=>{chart.style.display='block';
                     leave.style.display='none'
                     trial.style.display='none' }

      // time keeping starts here

      // const time_keeping=document.querySelector('#time-keeping')
      console.log(time_keeping)
      time_keeping.onclick=(e)=>{
        const time_keeping_div=document.querySelector('.time-keeping-div');
        e.stopPropagation();
        e.preventDefault();
        chart.style.display='none';
        leave.style.display='none'
        time_keeping_div.style.display='block'
      var now = new Date().toLocaleString().replace(",","").replace(/:.. /," ");

      //  now= now.format("dd/MM/yyyy hh:mm TT");
      const server_time=document.querySelector('.server-time');
      console.log(server_time);
      server_time.innerHTML=`Server Time : ${now}`;
     
      // const tr=document.querySelector('.tr');
      // tr.innerHTML={{user.id}}

      // document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
      
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            // do this
            const user_id = JSON.parse(document.getElementById('user_id').textContent);
          //  fetch(`{user_id}/is_onleave`
          //         {method="UPDATE",
                  
          //         });

            // const enableDarkMode = () => {
            //   // 1. Add the class to the body
            //   document.body.classList.add('darkmode');
            //   // 2. Update darkMode in localStorage
            //   localStorage.setItem('darkMode', 'enabled');
            //   // 3. toggle the checkbox
            //   darkModeToggle.setAttribute('checked', true);
            // }

            
          } else {
            // do that
            console.log('Not checked');
          }
        });
      // });

    }

       }

// sidebar chart and leave end

// function trial(){
//   const trial_btn=document.querySelector('#trial-btn');
//   const trial=document.querySelector('#trial')
//   const leave=document.querySelector(".leave");
//   const onleave=document.querySelector(".onleave");
//   const chart=document.querySelector("#chart");
//   trial_btn.onclick=()=>{
//     leave.style.display='none';
//     chart.style.display='none';
//     trial.style.display='block';
//    }
// } 
// function stat(){
//         var leave_main= document.querySelector("#leave-main");
//         var stat=document.querySelector("#stat");
//         const trial=document.querySelector('#trial')
//      stat.onclick=()=>{chart.style.display='block';
//                       leave.style.display='none'
//                       trial.style.display='none' }
//     }
     
// document.addEventListener("DOMContentLoaded",function(){
// function user_dtl(){
  // const dtl_btn=document.querySelector(".dtl-btn");
  // console.log(dtl_btn);
  // dtl_btn.onclick=(e)=>{
  //   e.preventDefault();
  //   const chat_cont=document.querySelector("#chat-cont");
  //   console.log(chat_cont);
  //   chat_cont.style.display='block';}
// }
// })

function application (){ 
  
      const apl_form=document.querySelector('#apl-form');
      const submit_btn=document.querySelector('#submit-btn');
    // submit_btn.onclick=()=>{(evt) => {
    submit_btn.onclick=()=>{(evt) => {
     const apl_form=document.querySelector('#apl-form');
     const csrftoken2=document.querySelector('[name=csrfmiddlewaretoken]').value;
     evt.preventDefault();
     evt.stopPropagation();
     data=new FormData(apl_form);

      // async()=>{
      //   try { await fetch('applicant_form', 
      //               { method:'POST',
      //                body:data,
      //                header:{'Content-Type': 'multipart/form-data',
      //                  'X-CSRFToken':csrftoken2}}
      //                )
      //         .then(response => response(json))
      //         .then(data => {console.log(data)})
      //               // return await data_response.json();
      //              }
      //              catch(err){console.error(err);}
           
      //  }
      
        fetch('applicant_form', 
                    { method:'POST',
                     body:data,
                     header:{'Content-Type': 'multipart/form-data',
                       'X-CSRFToken':csrftoken2}}
                     )
              .then(response => response(json))   //what going on here please correct the response prt
              .then(data => {console.log(data)
                           const user_image = document.querySelector('#user_image');
                           
                                 const img=data[0]['profile_picture'];
                               
                                console.log(img)
                                const div_upld=document.querySelector('#div-upld');
                                const img_div = document.createElement('img');
                                img.id='img-div';
                                img_div.setAttribute('src',`${img}`)
                                console.log(img_div)
                                div_upld.appendChild(img_div)

                                   })
           console.log('is there any response')        
    }
    }
}

document.addEventListener('DOMContentLoaded',function(){
  console.log('new DOMContentLoaded');
// THE BEGIN IS HERE

fetch('all_users')
  .then(response => response.json())
  .then(  data1=>{ console.log(data1)
    for(let i=0; i<data1.length; i++) {
                  const id_users=data1[i]['user_id']
                  const  name=data1[i]['name']
       
  fetch(`${id_users}/stat`)    
      .then(response => response.json())
      .then( data2 =>{console.log(data2)
        console.log(data2['static'][0]['fields']['is_onleave'])
        const status=data2['static'][0]['fields']['is_onleave']
        
        console.log(id_users)
            console.log(name)
            const admin_right=document.querySelector('.admin-right')
            console.log(admin_right)
            const canvas=document.createElement('canvas')
            canvas.setAttribute('id','admin-chart')
            const chart_div=document.createElement('div')
            chart_div.setAttribute('class','admin-chart-div')
            chart_div.setAttribute('id','admin-chart-id')
            console.log(chart_div)
            chart_div.append(canvas)

            console.log(chart_div)
            admin_right.append(chart_div)
            console.log(admin_right)
            console.log(id_users,name);
            const user_name=document.createElement('div')
            user_name.setAttribute('class','user-name')
            user_name.append(document.createTextNode(name))
            chart_div.append(user_name)

            if(status=='false'){
              const status_false=document.createElement('div')
              status_false.setAttribute('class','status-false')
              chart_div.append(status_false.appendChild(document.createTextNode('is on leave now')));
            }
            else{ status_true=document.createElement('div')
              chart_div.append(status_true.appendChild(document.createTextNode('is on work now')));}
   
  fetch("https://cdn.jsdelivr.net/npm/chart.js")  
  .then(  Chrt=>{ console.log(Chrt)
       
    
  const ctx = canvas

  new Chart(ctx, {
    type: 'bar',
    data: {
       labels:data2['date'],
     
      datasets: [{
        label: '# of Votes',
        data: data2['y_axis'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


})




  });
  
}
})






  // THE END IS HERE //
  fetch("https://cdn.jsdelivr.net/npm/chart.js")  
  .then(chart=>{ console.log(chart)
  //  fetch('user_stat')
  //   .then(response=>response.json())
  //   .then( data=>{console.log(data)

      const user_id = JSON.parse(document.getElementById('user_id').textContent);
      console.log(user_id);
      fetch(`${user_id}/stat`)
      .then(response => response.json())
      .then(data =>{console.log(data)
   
        console.log(data['date'])
  const ctx = document.getElementById('myChart')

  new Chart(ctx, {
    type: 'line',
    data: {
     
    // labels:['january', 'february', 'march', 'april'],
    labels:data['date'],
    // labels:data.year,
      datasets: [{
        label: '# of Votes',
      
        //  data: [12, 19, 3, 5, ],
        data: data['y_axis'],
        // data: 
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

})
// 

  });
  // }
});







function all_users(){
  console.log('all_users');
  fetch('all_users')
  
  .then(response => response.json())
  .then(data => {console.log(data)
  for (var i = 0; i < data.length; i++) 
   {
    
      const username=data[i]['name'];const id=data[i]['id'];const firstname=data[i]['firstname'];
      const lastname=data[i]['lastname'];const department=data[i]['department'];const date_hired=data[i]['date_hired'];
      const job_title=data[i]['job_title'];const profile_picture=data[i]['profile_picture'];const salary=data[i]['salary'];
      const userid=data[i]['user_id'];const avatar=data[i]['avatar'];

     
     
      const chat_img = document.createElement('img');
      chat_img.setAttribute('id',`userid${userid}`);
      
   
       chat_img.setAttribute('src', profile_picture);
      
      console.log(chat_img.getAttribute('src'));

      const  dtl_btn= document.createElement('div');
      dtl_btn.setAttribute('id',userid)
      dtl_btn.setAttribute('class','dtl-btn')
      const dtl_content=document.createElement('div')
      dtl_content.setAttribute('class','dtl-content')
      const div=document.createElement('div');
      div.setAttribute('id','dtl-profile')
     
       div.appendChild(chat_img);

      dtl_btn.appendChild(document.createTextNode(firstname))
      dtl_content.appendChild(div);
      const user_dtl=document.createElement('div')
      user_dtl.setAttribute('class','user-dtl')
      user_dtl.append(dtl_btn,dtl_content)
      console.log('all_users here');
      const dropdown_content=document.querySelector('.dropdown-content')
      dropdown_content.appendChild(user_dtl)  
    }
   
  const dtl_btn=document.querySelectorAll('.dtl-btn')
  console.log(dtl_btn)
  dtl_btn.forEach(dtl_btn=>{dtl_btn.onclick=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    // var inner=document.querySelector(`#${id}`).getAttribute('src');
    // console.log(inner)
    console.log(e.target);
    // const id=e.target.id
    const id=e.target.getAttribute('id')

   

    fetch(`${id}/message`)
    .then(response=>response.json())
    .then(data=>{console.log(data)
       console.log(id)
      const chat_container=document.createElement('div');
      chat_container.setAttribute('class', 'chat-container');
      chat_container.setAttribute('id', 'chat-cont');

      const scroll=document.createElement('div');
      scroll.setAttribute('class', 'scroll')
      // scroll.append(container,container_darker);
      console.log(scroll);
      // console.log(username)
      const test = JSON.parse(document.getElementById('user_username').textContent);
      console.log(test)
      // const reciever=data['msgs'][1]['reciever']
      //    console.log(reciever)
       console.log(data['msgs'].length)
    for(let i=0; i<data['msgs'].length; i++) {
      const reciever=data['msgs'][i]['reciever']
      const sender_id=data['msgs'][i]['sender_id']
      const msg=data['msgs'][i]['msg']
      const time=data['msgs'][i]['time']
      console.log(reciever)
      console.log(data['msgs'][i]['sender'])
    console.log(id)
    const main_sender=data['msgs'][i]['sender']
    console.log(sender_id)
    const main_reciever=data['msgs'][i]['reciever']
    console.log(reciever)

    const container_darker=document.createElement('div')
    container_darker.setAttribute('class', 'container-darker');
    const container=document.createElement('div')  
    container.setAttribute('class', 'container');
    if(main_sender){
      // const container=document.createElement('div')  
      // container.setAttribute('class', 'container');
      const img=document.createElement('img');
      const p=document.createElement('p');
      p.appendChild(document.createTextNode(main_sender.msg));
      const time_right=document.createElement('span');
      time_right.appendChild(document.createTextNode(main_sender.time))
      time_right.setAttribute('class', 'time_right');
      container.append(img, p, time_right);
      
    } //dont fornget 

    else{
      // const container_darker=document.createElement('div')
      // container_darker.setAttribute('class', 'container-darker');
      const right=document.createElement('img');
      right.setAttribute('class', 'right');
      const p1=document.createElement('p');
      p1.appendChild(document.createTextNode(main_reciever.msg));
      const time_left=document.createElement('span');
      time_left.setAttribute('class', 'time_left');
      time_left.appendChild(document.createTextNode(main_reciever.time));
      container_darker.append(right,p1,time_left);

    }
      const scrl_div=document.createElement('div');
      
      // const scroll=document.createElement('div');
      // scroll.setAttribute('class', 'scroll')
      scroll.append(container,container_darker);
      // console.log(scroll);
      chat_container.append(scroll);
    // }
    console.log(id)
    inner_pic=document.getElementById(`userid${id}`).getAttribute('src');
    console.log(inner_pic);

      chat_header=document.createElement('div');
      chat_header.setAttribute('class', 'chat-header');
      chat_header.setAttribute('id', 'ch-header-id');
      // inner_pic=document.getElementById(`user${id}`).getAttribute('src');
      const header_img=document.createElement('img');
      header_img.setAttribute('src',inner_pic);
      // chat_header.append(header_img);  //here is the chat header pictures dont forget please
      chat_container.append(chat_header);
      console.log(chat_container);
      // chat_container.appendChild(chat_header,scroll);

    }


      const chat_form = document.createElement('form');
      chat_form.setAttribute('class', 'chat-form');
      chat_form.setAttribute('id', 'ch-form-id');
      chat_form.setAttribute('cynctype', 'media-type');
console.log(chat_form);
      chat_textarea = document.createElement('textarea');
      chat_textarea.setAttribute('class', 'chat-textarea');
      chat_textarea.setAttribute('id', 'ch-textarea-id');
      chat_textarea.setAttribute('name','message');

      chat_submit=document.createElement('input');
      chat_submit.setAttribute('class', 'chat-submit');
      chat_submit.setAttribute('type', 'submit',);
      chat_submit.setAttribute('value', 'send',);

      const csrf=document.createElement('input');
      csrf.type='hidden';
      csrf.id='chat-csrf';
      csrf.name='csrfmiddlewaretoken';
      csrf.value='{{csrf_token %}}';
   console.log(csrf);
    //  const chat_csrf=document.querySelector('[name=csrfmiddlewaretoken]').value
    //  console.log(chat_csrf);
      chat_form.append(csrf,chat_textarea,chat_submit);
    console.log(csrf.value);
      chat_container.append(scroll,chat_form);
      
      // chat_container.append(chat_header,scroll,chat_form);
      // chat_container.append(chat_header,chat_form);
  console.log(chat_container);
      const chat_div=document.querySelector('.chat-div');
    console.log(chat_div);
      chat_div.append(chat_container)

      chat_submit.onclick = function(e){
        e.preventDefault();
        e.stopPropagation();
        // const data=new FormData(chat_form);
        const message=document.querySelector('.chat-textarea').value;
        console.log(message);
        const chat_csrf=document.querySelector('[name=csrfmiddlewaretoken]').value
     console.log(chat_csrf);
        fetch(`${id}/message`,
              {method: 'POST',
               body: JSON.stringify({message:message}),
               headers:{'Content-Type':'media-type',
                         'X-CSRFToken':chat_csrf},
              })
               .then(response =>response.json())
               .then(data =>{console.log(data)})
        console.log('csrf')
      }

             

    })
  }});

  });
}

  
document.addEventListener('DOMContentLoaded',function(){
  console.log('new DOMContentLoaded');
fetch('applicant_form',)
.then(response => response.json())
.then(data =>{console.log(data)

  const img=data[0]['profile_picture'];
                console.log('where is the img')
                console.log(img)
                const div_upld=document.querySelector('#div-upld');
                const img_div = document.createElement('img');
                img_div.id='img-div';
                img_div.setAttribute('src',`${img}`)
                console.log(img_div)
                div_upld.appendChild(img_div)
               

})


});













// document.addEventListener("DOMContentLoaded",function(e) {   
  // // function submitRegister(){
  //      const submit_reg=document.querySelector('#submit-reg');
  //      const apl_form=document.querySelector('#apl-form');
  //      const leave=document.querySelector(".leave");
  //      const onleave=document.querySelector(".onleave");
  //      var chart=document.querySelector("#chart");
  //      submit_reg.onclick= function(e){
  //       e.preventDefault();
  //       leave.style.display="none";
  //       chart.style.display="none";
  //       apl_form.style.display="block";
  //      a}})
  // };
  
   
  // function register(){ 
  //   const submit_reg=document.querySelector('#submit-reg');
  //   submit_reg.onclick=(e)=>{
  //     e.preventDefault();
  //     console.log(e.target);
  //     const form_reg= document.querySelector('#form-reg');
  //     const user_reg=document.querySelector('#user-reg').value;
  //     console.log(user_reg);
  //     const email_reg=document.querySelector('#email-reg').value;
  //     const password_reg=document.querySelector('#password-reg').value;
  //     const confirm_reg=document.querySelector('#confirm-reg').value
     
      
  //     const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  //     const reg=new FormData(form_reg);
  //     console.log(reg)
  //     console.log(csrftoken);
  //     console.log(e);
  //     console.log(e.target)
  //     e.preventDefault
     
  //     fetch('user_register',
        
  //            {method:'post',
  //             // body:JSON.stringify({user_reg:user_reg,email_reg:email_reg,password_reg:password_reg,confirm_reg:confirm_reg}),
  //             body:reg,
  //             // credentials: 'same-origin',
  //             // mode:        'same-origin',
  //             headers: { "X-CSRFToken": csrftoken }
              
  //              } 
  //              )
  //           //   .then(response=response.json())
  //           //   .then(data=>{console.log(data)
  //           //            document.getElementById('leave').style.display='block'    })
  //           // console.log(user_reg)  
  //    }
  // }
  
  // function login() {
  //   const login_form=document.getElementById('login-form');
  //   const login_sbt=document.querySelector('#login-sbt');
  //   const csrftoken1 = document.querySelector('[name=csrfmiddlewaretoken]').value;
  //   console.log(csrftoken1);
  //   login_sbt.onclick= async function() {
  //      e.preventDefault();
  //      e.stopPropagation();
  //     data=new FormData(login_form)
  //    await fetch('user_login',
  //            {method: 'POST',
  //             body:data,
  //             headers:{'X-CSRFToken':csrftoken1}})
  //             // .then(response=>response.json())
  //             // .then( 
  //               // data=>{console.log(data)
  //               //  document.querySelector('#apl-form').style.display='block'
  //               // )
  //   }
  // }
    
  // function chatbox(){
  //               console.log("please")
  //               const chat_flex = document.querySelector("#chat-flex");
  //               chat_flex.style.display='block';
  //               const chat_cont=document.querySelector("#chat-cont");
  //               chat_cont.style.display='none';
  //               const chat_header=document.querySelector("#ch-header-id");
  //               console.log(chat_header);
               
  //               chat_flex.onclick=function(){
  //                 if(chat_cont.style.display=="none"){
  //                   chat_cont.style.display="block"
  //                   chat_flex.style.display='none'
                  
  //                  chat_header.onclick=()=>{
  //                  chat_flex.style.display="block"
  //                  chat_cont.style.display='none'} }
  
  //                  const dtl_btn=document.querySelector(".dtl-btn");
  //                  console.log(dtl_btn);
  //                  dtl_btn.onclick=(e)=>{
  //                    e.preventDefault();
  //                    const chat_cont=document.querySelector("#chat-cont");
  //                    console.log(chat_cont);
  //                    chat_cont.style.display='block';
  
  //                   // you can further include here the logic in user chat
  //                   }
  //               }              
  //                }














// function chatbox(){
//   console.log("please")
//   const chat_flex = document.querySelector("#chat-flex");
//   chat_flex.style.display='block';
//   const chat_cont=document.querySelector("#chat-cont");
//   chat_cont.style.display='none';
//   const chat_header=document.querySelector("#ch-header-id");
//   console.log(chat_header);
 
//   chat_flex.onclick=function(){
//     if(chat_cont.style.display=="none"){
//       chat_cont.style.display="block"
//       chat_flex.style.display='none'
    
//      chat_header.onclick=()=>{
//      chat_flex.style.display="block"
//      chat_cont.style.display='none'} }

//      const dtl_btn=document.querySelector(".dtl-btn");
//      console.log(dtl_btn);
//      dtl_btn.onclick=(e)=>{
//        e.preventDefault();
//        const chat_cont=document.querySelector("#chat-cont");
//        console.log(chat_cont);
//        chat_cont.style.display='block';

//       // you can further include here the logic in user chat
//       }
//   }              
//    }
    
      
  
// const first_name = document.querySelector('#first-name');
// console.log(first_name);
// const second_name=document.querySelector('#second-name');
// const last_name=document.querySelector('#last-name');
// // const sex=document.getElementById('sex');
// const age=document.querySelector('#age');
// const hired_date=document.getElementById('hire-date');
// const department=document. querySelector('#department');
// const job=document.querySelector('#job');
// const salary=document.querySelector('#salary');
// const  work=document.querySelector('#work')
// const document=document.querySelector('#document');
// const profile_pic=document.querySelector('#picture');
// const csrftoken= document.querySelector('[name=csrfmiddlewaretoken]').value;
// const application_form = new FormData(apl_form)
 // input_data =[first_name,second_name,last_name, age,hired_date, department, job,salary,work]

 // for(let i=0;i<input_data.length; i++){
 // application_form.append(`${input_data[i]}`, `${input_data[i].value}`);
 // }

 // application_form.append("document", document.files[0]);
 // application_form.append("profile_pic", profile_pic.files[0]);

 // Using the data-sending method declared above to send the data to the server
 // sendData(application_form, '/applicant_form')
 // .then (json => {
 //     // Place codes After the response from the server here
 //     console.log(json)
 // })








  // application_form.append("first_name", first_name);
      // application_form.append("second_name", second_name);
      // application_form.append("last_name", last_name);
      // application_form.append("age", age);
      // application_form.append("hired_date", hired_date);
      // application_form.append("department", department);
      // application_form.append("job", job);
      // application_form.append("salary", salary);
      // application_form.append("work", work);

// evt.preventDefault();
      // evt.stopPropagation();
      // const apl_form=document.querySelector('#apl-form');
      // const first_name = document.querySelector('#first-name');
      // console.log(first_name);
      // const second_name=document.querySelector('#second-name');
      // const last_name=document.querySelector('#last-name');
      // // const sex=document.getElementById('sex');
      // const age=document.querySelector('#age');
      // const hired_date=document.getElementById('hire-date');
      // const department=document. querySelector('#department');
      // const job=document.querySelector('#job');
      // const salary=document.querySelector('#salary');
      // const  work=document.querySelector('#work')
      // const document=document.querySelector('#document');
      // const profile_pic=document.querySelector('#picture');
      // const csrftoken_value= document.getElementById('[name=csrfmiddlewaretoken]');
      // const application_form = new FormData(apl_form)
      // input_data =[first_name,second_name,last_name, age,hired_date, work, department,salary,job]


















// document.addEventListener("DOMContentLoaded",function(){
//     // function chatbox(){
//       console.log("please")
//     const chat_header=document.querySelector(".chat-header");
//     console.log(chat_header);
//     const chat_form=document.querySelector(".chat-form");
//     chat_form.style.display="none";
//     chat_header.onclick=function(){
//       if(chat_form.style.display=="none"){
//         chat_form.style.display="block"
//       }
//       else{chat_form.style.display="none"}
//      };
//     // }
//     });

    // const me=new Tam('big')
    // console.log(me.big);
    
    // const first_name=document.getElementById('first-name');
// const second_name=document.getElementById('second-name');
// const last_name=document.getElementById('last-name');
// const sex=document.getElementById('sex');
// const age=document.getElementById('age');
// const hired_date=document.getElementById('hire-date');
// const work=document.getElementById('work');
// const department=document.getElementById('department');
// const salary=document.getElementById('salary');
// const job=document.getElementById('job');
// const document=document.getElementById('document');
// const profile_pic=document.getElementById('picture');
// const csrftoken_value= document.getElementById('[name=csrfmiddlewaretoken]');
// const submit_btn=document.getElementById('submit_btn');

// const data_send=async(data,url)=>{
//  try { await fetch(`${url}`,
//              { method:'POST',
//               body:data,
//               header:{'Content-Type': 'multipart/form-data',
//                 'X-CSRFToken':csrftoken_value.value}}
//               );
//              return await data_response.json();
//             }
//             catch(err){console.error(err);}
    
// }

// submit_btn.onclick=()=>{(evt) => {
//   evt.preventDefault();
  
//   const application_form = new FormData()
//   input_data =[first_name,second_name,last_name,sex, age,hired_date,work, department,salary,job]

//   for(let i=0;i<input_data.length; i++){
//   application_form.append(`${input_data[i]}`, `${input_data[i].value}`);
// }
//   application_form.append("document", document.files[0]);
//   application_form.append("profile_pic", profile_pic.files[0]);

//   // Using the data-sending method declared above to send the data to the server
//   sendData(application_form, '/applicant_form')
//   .then (json => {
//       // Place codes After the response from the server here
//       console.log(json)
//   })}
// }
// document.addEventListener("DOMContentLoaded",function(){
// // function chatbox(){
//   console.log("please")
// const chat_header=document.querySelector(".chat-header");
// console.log(chat_header);
// const chat_form=document.querySelector(".chat-form");
// chat_form.style.display="none";
// chat_header.onclick=function(){
//   if(chat_form.style.display=="none"){
//     chat_form.style.display="block"
//   }
//   else{chat_form.style.display="none"}
//  };
// // }
// });
