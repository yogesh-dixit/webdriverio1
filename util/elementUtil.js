

class ElementUtil{
    doClick(element){
        element.waitFotDisplayed()
        element.click()
    }
    doSetValue(element,value){
        element.waitFotDisplayed()
        element.setValue(value)
    }
    doGetText(element){
        element.waitFotDisplayed()
        return element.getText()
    }
    doIsDisplayed(element){
        element.waitFotDisplayed()
        return element.isDisplayed()
    }
    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
            return(browser.getTitle()===pageTitle)

        },10000,'title is not displayed after the given time')
        return browser.getTitle()
    }

}
module.exports=new ElementUtil()