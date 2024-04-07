let $=document
const hourElem=$.querySelector('#hour')
const minuteElem=$.querySelector('#minute')
const secondsElem=$.querySelector('#seconds')

setInterval(function(){
    let myDate=new Date()
    let nowHour=myDate.getHours()
    let nowminute=myDate.getMinutes()
    let nowsecond=myDate.getSeconds()
if(nowHour<10){
nowHour='0'+nowHour
}
if(nowminute<10){
nowminute='0'+nowminute
}
if(nowsecond<10){
nowsecond='0'+nowsecond
}
hourElem.innerHTML=nowHour
minuteElem.innerHTML=nowminute
secondsElem.innerHTML=nowsecond},1000)