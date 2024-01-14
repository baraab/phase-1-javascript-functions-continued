// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork as a function expression
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define wrapAdjective as a higher-order function
  function wrapAdjective(wrapper = "*") {
    // Return a function that wraps an adjective in the specified highlight
    return function (adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  