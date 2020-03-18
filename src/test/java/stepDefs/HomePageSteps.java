package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import functions.CommonFunctions;

public class HomePageSteps {
	
	CommonFunctions cfn = new CommonFunctions();

	@Given("^user navigates to \"([^\"]*)\" site$")
	public void user_navigates_to_site(String appUrl) throws Throwable {
		System.out.println("Given Step");
		cfn.LaunchApp(appUrl);
	}

	@When("^user clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String arg1) throws Throwable {
		System.out.println("When Step");
	}

	@Then("^corresponding \"([^\"]*)\" page should be displayed$")
	public void corresponding_page_should_be_displayed(String arg1) throws Throwable {
		System.out.println("Then Step");
	}

}
