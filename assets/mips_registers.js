function registers_head() {
    return `
        <thead>
            <th>name</th>
            <th>number</th>
            <th>use</th>
            <th>cross-call-safety</th>
        </thead>
        <tbody></tbody>
    `;
}

function build_registers_table() {
    registers.forEach((element) => {
        registers_table.append(build_registers_row(element));
    });
}

function build_registers_row(row) {
    var the_row = $("<tr></tr>");
    for (key in row) {
        the_row.append(`<th>${row[key]}</th>`);
    }
    return the_row;
}
