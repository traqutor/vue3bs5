import moment from "moment";


export const dateHeaderTimeAgoFormat = (value) => {
  let text;
  let momentValue;

  if (typeof value === "number") {
    momentValue = moment.unix(value);
  } else {
    momentValue = moment(value);
  }

  const TODAY = moment().startOf("day");
  const YESTERDAY = TODAY.clone().subtract(1, "days").startOf("day");

  if (momentValue.isSame(TODAY, "d")) {
    text = "Today";
  } else if (momentValue.isSame(YESTERDAY, "d")) {
    text = "Yesterday";
  } else {
    text = momentValue.format("DD MMM YYYY");
  }
  return text;
};

export const timeMessagesDividerFormat = (value) => {
  let text;
  let momentValue;

  if (typeof value === "number") {
    momentValue = moment.unix(value);
  } else {
    momentValue = moment(value);
  }

  const TODAY = moment().startOf("day");
  const YESTERDAY = TODAY.clone().subtract(1, "days").startOf("day");
  const THIS_WEEK = TODAY.clone().startOf("week");

  if (momentValue.isSame(TODAY, "d")) {
    text = "Today";
  } else if (momentValue.isSame(YESTERDAY, "d")) {
    text = "Yesterday";
  } else if (
    momentValue.isBefore(YESTERDAY) &&
    momentValue.isAfter(THIS_WEEK)
  ) {
    text = momentValue.format("dddd");
  } else {
    text = momentValue.format("DD/MM/YYYY");
  }
  return text;
};

export const timeOffsetFormat = (value) => {
  if (typeof value === "number") {
    return moment.unix(value).format("h:mm a");
  } else {
    return moment(value).format("h:mm a");
  }
};

export const timeHhMmaDotDdddFormat = (value) => {
  let text;
  let momentValue;

  if (typeof value === "number") {
    momentValue = moment.unix(value);
  } else {
    momentValue = moment(value);
  }
  const TODAY = moment().startOf("day");
  const YESTERDAY = TODAY.clone().subtract(1, "days").startOf("day");
  const THIS_WEEK = TODAY.clone().startOf("week");

  if (momentValue.isSame(TODAY, "d")) {
    text = "Today";
  } else if (momentValue.isSame(YESTERDAY, "d")) {
    text = "Yesterday";
  } else if (
    momentValue.isBefore(YESTERDAY) &&
    momentValue.isAfter(THIS_WEEK)
  ) {
    text = momentValue.format("dddd");
  } else {
    text = momentValue.format("DD/MM/YYYY");
  }
  return momentValue.format("h:mm a [ • ] ") + text;
};

export const timeTaskCreationFormat = (value) => {
  let momentValue;

  if (typeof value === "number") {
    momentValue = moment.unix(value);
  } else {
    momentValue = moment(value);
  }

  return momentValue.fromNow();
};

export const timeTaskDueFormat = (value) => {
  let momentValue;

  if (typeof value === "number") {
    momentValue = moment.unix(value);
  } else {
    momentValue = moment(value);
  }

  return momentValue.format("h:mm");
};
