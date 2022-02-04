let instruction_table;
let instructions;

$(document).ready(() => {
    instruction_table = $("#instructions");
    instruction_table.append(mips_head());
    instructions = instruction_table.children("tbody");

    build_mips_table();

    document.getElementById("mips_search").addEventListener("input", (e) => {
        mips_search(e.srcElement.value);
    });
});

function mips_head() {
    return `
    <thead>
        <th>Type</th>
        <th>Instruction</th>
        <th>RTL</th>
        <th>Notes</th>
    </thead>
    <tbody></tbody>
    `;
}

function build_mips_row(el) {
    return `
    <tr>
        <td>${el.type}</td>
        <td>${el.instruction}</td>
        <td>${el.rtl}</td>
        <td>${el.notes}</td>
    </tr>
    `.replace("undefined", "");
}

function build_mips_table() {
    mips.forEach((element) => {
        instructions.append(build_mips_row(element));
    });
}

function mips_search(text) {
    drop_mips_table();
    if (text === "") build_mips_table();
    else if (text === "R" || text === "I" || text === "J")
        perform_mips_typeselect(text);
    else perform_mips_search(text);
}

function drop_mips_table() {
    instructions.html("");
}

function perform_mips_typeselect(type) {
    mips.forEach((element) => {
        if (element.type === type) {
            instructions.append(build_mips_row(element));
        }
    });
}

function perform_mips_search(text) {
    mips.forEach((element) => {
        if (
            element.instruction.includes(text) ||
            element.rtl.includes(text) ||
            element.notes?.includes(text)
        )
            instructions.append(build_mips_row(element));
    });
}
