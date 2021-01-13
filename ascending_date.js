var alphabeticallyOrderedDivs = $('.card-text').sort(function(a, b) {
  return String.prototype.localeCompare.call($(a).text().toLowerCase(), $(b).text().toLowerCase());
});

var container = $(".container");
container.detach().empty().append(alphabeticallyOrderedDivs);
$('body').append(container);