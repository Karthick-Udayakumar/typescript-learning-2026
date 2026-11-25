abstract class Page{
    abstract login():void
    abstract title():void

    loading():void{
        console.log("Loading the page");
    }
}

class LoginPage extends Page{
    login():void
    {
        console.log("Login successful");
    }

    title(): void {
        console.log("Get the title");
    }

    override loading():void{
        console.log("Login page loading");
    }

    ending()
    {
        console.log('Logging out');
    }
}

let loginpage: LoginPage = new LoginPage();

loginpage.title();
loginpage.ending();
loginpage.loading();