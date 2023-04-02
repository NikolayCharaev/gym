
export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
  }


  export interface BenefitsType{ 
    title: string,
    description: string,
    icon: JSX.Element
  }