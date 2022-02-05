let formats_table;

$(document).ready(() => {
    formats_table = $("#mips_formats");
    formats_table.append(formats_head());

    build_formats_table();
});

function formats_head() {
    return `
        <thead>
            <th>Type</th>
            <th aria-label="31-26">31\t26</th>
            <th aria-label="25-21">25\t21</th>
            <th aria-label="20-16">20\t16</th>
            <th aria-label="15-11">15\t11</th>
            <th aria-label="10-06">10\t06</th>
            <th aria-label="05-00">05\t00</th>
        </thead>
        <tbody></tbody>
    `;
}

function build_formats_table() {
    formats.forEach((element) => {
        formats_table.children("tbody").append(build_formats_row(element));
    });
}

function build_formats_row(row) {
    var the_row = $("<tr></tr>");
    for (key in row) {
        var span = 1;
        if (key.match(/\d{2}-\d{2}/)) {
            var [start, end] = key.split("-");
            var cells = formats_table
                .children("thead")
                .children("tr")
                .children("th");
            cells.each((idx) => {
                if (cells.eq(idx).attr("aria-label")?.split("-")[1] === end) {
                    the_row.append(`<td colspan=${span}>${row[key]}</td>`);
                    return false;
                } else {
                    if (
                        cells.eq(idx).attr("aria-label")?.split("-")[0] ===
                            start ||
                        span != 1
                    ) {
                        span += 1;
                    }
                }
            });
        } else {
            the_row.append(`<td>${row[key]}</td>`);
        }
    }
    return the_row;
}

//string.hashCode()
String.prototype.hashCode = function () {
    var hash = 0,
        i,
        chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
