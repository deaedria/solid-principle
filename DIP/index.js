// Dependencies Inversion Principle (DIP)
// module atau high-level tidak bergantung pada low-level tetapi pada abstraction
// abstraction tidak harus bergantung pada detail, tetapi detail harus bergantung pada abstraction
class Notification{
    _email = Email

    Notification(){
        this._email = new Email()
    }

    promoNotification(){
        this._email.send()
    }
}

class Notification{
    _messenger = Mess

    Notification(){
        this._messenger = messenger
    }

    promoNotification(){
        this._messenger.send()
    }
}



// tambahan
class IMessenger{
    sendMessage()
}

class Email implements IMessenger{
    sendMessage(){
        // send email
    }
}

class Sms implements IMessenger{
    sendMessage(){
        // send sms
    }
}

class Notification{
    _messenger = IMessenger

    Notification(){
        this._messenger = messenger
    }

    promoNotification(){
        this._messenger.sendMessage()
    }
}