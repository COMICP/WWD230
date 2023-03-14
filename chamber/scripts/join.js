const forumDateTime = document.querySelector("#time");
const dateandTime = `Date: ${now.getDate()} Time: ${now.getTime()}`;
if (forumDateTime) {
    forumDateTime.setAttribute('value', dateandTime);
}