const $form = $("form");
const $publish = $("#publish");

$form.on("submit", (event) => {
  event.preventDefault();
  const formData = new FormData($form[0]);
  let monthNumber = parseInt(formData.get("month"));
  let dayNumber = parseInt(formData.get("day"));
  $.ajax(
    `https://holidays.abstractapi.com/v1/?api_key=bafcafa7fb2243929607c7d3481da810&country=US&year=2023&month=${monthNumber}&day=${dayNumber}`
  ).then((getDatas) => {
    console.log(getDatas[0]);
    console.log(getDatas[0].type);
    const info = getDatas[0];
    const div = $("#publish");
    const newDiv = $("<div>").addClass("info1");

    if (
      (monthNumber === 1 && dayNumber === 1) ||
      (monthNumber === 1 && dayNumber === 16) ||
      (monthNumber === 2 && dayNumber === 20) ||
      (monthNumber === 5 && dayNumber === 29) ||
      (monthNumber === 7 && dayNumber === 4) ||
      (monthNumber === 9 && dayNumber === 4) ||
      (monthNumber === 10 && dayNumber === 9) ||
      (monthNumber === 11 && dayNumber === 10) ||
      (monthNumber === 11 && dayNumber === 23) ||
      (monthNumber === 12 && dayNumber === 25)
    )
      newDiv.html(`
        <h1> It is a Holiday: ${info.type}</h1>
        `);
    else {
      newDiv.html(`<h2> It is not a holiday: ${info.type} </h2>`);
    }

    div.append(newDiv);
    // const alphas = div.append(newDiv);
    // console.log(alphas);
  });
});
