## The Joint Content Conformance Project (JCCP)  announces the completion of its open-source media streaming conformance project

<img src="https://dashif.org/img/JCCP.png" width="600">

Content conformance is the key to interoperability and gaining optimal coverage across a wide set of heterogeneous devices and platforms. The joint project undertaken over the past two years has improved the tool, making it more reliable and accessible. 

The Joint Content Conformance Project (JCCP) aims to to improve and refactor the current code base of the Conformance Validator [1].  It was funded by DASH-IF along with the DVB Project, the Consumer Technology Association® WAVE (Web Application Video Ecosystem) Project, the HbbTV Association, and ATSC


### Why JCCP?

The Conformance Tool was launched by DASH-IF over a decade ago and has been continuously updated and extended to test against relevant specifications from other bodies. 

The codebase of the Conformance Validator grew over time, supporting multiple profiles from different organizations. Consequently, the code became quite unstructured and difficult to maintain, creating a high entry barrier for the contributions of new test cases and features. Moreover, it had various bugs leading to crashes and false positive results. The documentation was incomplete, and the underlying technology was outdated, leading to a bad performance overall.


## Results

In the scope of the JCCP project, various goals were achieved:

- **Code Refactoring and Improvements** : A major refactoring of the codebase:
  - Improving the stability and splitting the parsing and validation steps in the ISO segment validator
  - Adding dedicated PHP files for each of the modules
  - Consolidated repository instead of including the modules from dedicated Git repositories
  - Removing unused files
  - Removing Python as a dependency
- **CI/CD:** New versions of the Conformance Validator are now automatically deployed to a staging and a production environment after a change has been pushed to the GitHub repository. In addition, automated code linting and generation of code documentation are in place.
- **Code Coverage:** Scripts are provided to derive the conformance validation and code coverage for a set of test content.
- **Conformance Validator Frontend:** The old landing page of the conformance validator based on an outdated version of Angular.js was replaced with a plain JavaScript implementation that uses the new REST interface instead of polling a custom PHP file
- **Conformance Analytics:** Based on the server logs, a new dashboard provides access to statistics on the usage of the conformance validator, including usage statistics for each of the individual modules.
- **Documentation** : The documentation was improved and extended providing an installation and setup guide, and establishing development principles including a Git branching strategy and instructions on how to handle pull requests. Moreover, documentation on the release strategy was added. In addition, the documentation contains instructions on how to use the command line and the newly created REST interface.
- **Additional new features:**
  - Command Line Interface (CLI) to run tests directly from the command line instead of using a web interface
  - REST interface to trigger the conformance validation
  - Support for running the conformance tools in Docker

## References

- Documentation: [https://github.com/Dash-Industry-Forum/DASH-IF-Conformance/wiki](https://github.com/Dash-Industry-Forum/DASH-IF-Conformance/wiki)
- Hosted Installation:
  - Stable: [https://conformance.dashif.org/](https://conformance.dashif.org/)
  - Staging: [https://staging.conformance.dashif.org/](https://staging.conformance.dashif.org/)
- Github:
  - [https://github.com/Dash-Industry-Forum/DASH-IF-Conformance](https://github.com/Dash-Industry-Forum/DASH-IF-Conformance)

## Quotes

Iraj Sodagar (Tencent America, DASH-IF President): The conformance validator software has been a very popular tool for validating the conformance of generated content to various media streaming standards and consortia specs. This project signifies a substantial enhancement over its predecessor, rendering the software more amenable to further developments. Moreover, it serves as a testament to the collaborative capacity of consortia in open-source projects for the benefit of the industry as a whole.

Daniel Silhavy (Fraunhofer FOKUS): The Conformance Validator is a very valuable tool in the context of dash.js development. Often, we are faced with situations in which users create invalid DASH streams that result in issues or cause side effects during playback with dash.js. Having the opportunity to validate these streams in the Conformance Validator and highlighting potential errors in the content itself helps us to distinguish between real bugs in the player and issues caused by invalid content.

## References

[1] [https://conformance.dashif.org/](https://conformance.dashif.org/)
