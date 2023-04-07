function ac() {
    cal.field.value = ""
}
  
function del() {
    cal.field.value = cal.field.value.substring(-1, cal.field.value.length -1)
}
  
function insert(par) {
    cal.field.value += par
}
  
function equal() {
    cal.field.value = eval(cal.field.value)
}

    
