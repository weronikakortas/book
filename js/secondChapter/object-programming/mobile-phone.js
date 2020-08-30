const phone = {
    brand: "Samsung"
    color: 'black'
    price: 123.21
    usbC: false
    sendSms: function (text) {
        this.sms = this.user + "send info: " + text
    }
    user: "Marcin"
}
phone.sendSms("treść smsa");

console.log(phone.sms);
console.log("phone brand is "+phone.brand+" and price was "+phone.price)
;