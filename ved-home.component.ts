import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ved-home',
  templateUrl: './ved-home.component.html',
  styles:['#v {color:red}']
})
export class VedHomeComponent  {

 
 
 
  ngOnChanges()
  {
    console.log("ngOnChanges", this.title1);     // ye component initializing ke time per execute hoga or multiple time bar execute hoga (value update hone ke bad execute nai hoga)
  }                                                    // means ki jab kabhi be value update hogi events ke through jiske samne (@Input) decoration hoga           
                                                       // (@Input) decoration ke bina execute nai hoga  
  ngOnInit()
  {                                      // ye component ke initailizing ke time execute hoga sirf (ek bar)
    console.log("ngOnInit ")  
  }

  ngDoCheck()
  {                                       // ye component ke initializing time  per execute hoga  or  multiple bar execute hoga jab kabhi value update hogi 
    console.log("ngDoCheck");              // or  value update hone ke bad be execute hoga
  }                                       //(@Input) decoration ke bina execute hoga


  ngAfterContentInit()
  {
    console.log("ngAfterContentInit")           // ye component ke initailizing ke time execute hoga sirf (ek bar)
   }                                            //(@Input) decoration ke bina execute hoga


   ngAfterContentChecked()
   {                                          // ye component ke initializing time  per execute hoga  or  multiple bar execute hoga jab kabhi value update hogi 
     console.log("ngAfterContentCheck")      // or  value update hone ke bad be execute hoga
   }                                         //(@Input) decoration ke bina execute hoga 

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit")         // ye component ke initailizing ke time execute hoga sirf (ek bar)
  }

  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked")    // sameee   
  }


  @Input()  title1:any;



  

}
