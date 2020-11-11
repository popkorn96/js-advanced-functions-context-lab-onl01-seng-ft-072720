/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(element){
    return {
        firstName: element[0],
        familyName: element[1],
        title: element[2],
        payPerHour: element[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};
function createEmployeeRecords(employeeData){
    return employeeData.map(function(e){
        return createEmployeeRecord(e)
    })
};
function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
};
function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
};
function hoursWorkedOnDate(dateQuest){
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === dateQuest
    })
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === dateQuest
    })
    return (timeOut.hour - timeIn.hour) / 100
};
function wagesEarnedOnDate(dateStamp){
    let wage = this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
    return wage
};
function calculatePayroll(allEmployeeRecords){
    return allEmployeeRecords.reduce(function(ric, rec){
        return ric + allWagesFor.call(rec)
    }, 0)
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};
function findEmployeeByFirstName(array, firstNameQuest){
    return array.find(function(e){
        return e.firstName === firstNameQuest
    })
};