# JMeter: Performance scripting

**Installation & Setup**
```
1.	Prerequisite: Java Development Kit 8 (JDK 8)
All OS: https://www.oracle.com/java/technologies/downloads/

2.	Setup the JMeter on your local machine
JMeter Download: https://jmeter.apache.org/download_jmeter.cgi
Unzip and save the extracted JMeter folder to any location

3.	Start JMeter Interface
Win: go to jmeter/bin folder and run jmeter.bat
OXS: open terminal in jmeter/bin folder run sh jmeter.sh

4.	Run the JMeter scripts

Optional: Setup JMeter in the Windows environment variables
Win: 
a. Search for Environment Variables > Environment Variables
b. Under System variables: New > Variable name: *JMETER_HOME*, Variable value: *<path of your JMeter program> (ie: C:\Users\john\apache-jmeter-5.5)* > OK
c. Under System variables: Select Path > Edit > New > *%JMETER_HOME%\bin*

Your JMeter.bat command can now be ran in Windows from any folder location.
```

**API**
```
- API Sample Datafile.csv is used for data to run the script
- Check that the datafile path within the script is pointed to the proper location before running
- Ensure you have permission to test the API endpoints, you don't want it to be mistaken as a DDoS attack
```

**Webpage**
```
- Sample webpage was recorded using the BlazeMeter extension in Chrome
- Similar to API scripts, please do not load test on production websits to avoid a mistaken DDoS attack
```

**Additional Information:**
It is recommended to close the JMeter UI and run JMeter scripts in the CLI to minimize any performance impacts due to local resources being used.
The CLI (Command Line Interface) command is: `Jmeter -n -t [jmx file] -l [results file] -e -o [Path to web report folder]`