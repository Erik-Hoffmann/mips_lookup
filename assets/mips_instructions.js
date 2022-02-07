function mips_head() {
    return `
    <thead>
        <th>Type</th>
        <th>Instruction</th>
        <th colspan=6>RTL</th>
        <th>Notes</th>
        <th></th>
    </thead>
    <tbody></tbody>
    `;
}

function build_mips_row(el) {
    return `
    <tr class="instruction">
        <td colspan=1>${el.type}</td>
        <td colspan=1>${el.instruction}</td>
        <td colspan=6>${el.rtl}</td>
        <td colspan=1>${el.notes}</td>
        <td colspan=1 class="tooltip-toggler"></td>
    </tr>
    `.replace("undefined", "");
}

function find_by_hash(hash) {
    var elem;
    mips.forEach((el) => {
        if (el.instruction.hashCode() === hash) {
            return (elem = el);
        }
    });
    return elem;
}

function build_tooltip(el, hash) {
    return build_type(el.bitfields, hash);
}

function build_type(fields, hash) {
    var res_head = `<tr class="bitfields" identifier=${hash}><td colspan=2/>`;
    var res_content = `<tr class="bitfields" identifier=${hash}><td colspan=2/>`;
    var count = 6;
    for (key in fields) {
        var span = 1;
        if (key === "const") {
            span = count;
        }
        res_head += `<td colspan=${span}>${key}</td>`;
        res_content += `<td colspan=${span}>${fields[key]}</td>`;
        count--;
    }
    res_head += `<td colspan=2/></tr>`;
    res_content += `<td colspan=2/></tr>`;
    return (res_head += res_content);
}

function tooltip_trigger() {
    document.querySelectorAll(".instruction").forEach((item) => {
        item.addEventListener("click", (e) => {
            var target = item;
            var identifier = target.children[1].innerHTML.hashCode();
            if ($(target).hasClass("active")) {
                $(target).removeAttr("identifier").toggleClass("active");
                $(`[identifier=${identifier}]`).remove();
            } else {
                $(target).attr({ identifier: identifier, class: "active" });
                $(
                    build_tooltip(find_by_hash(identifier), identifier)
                ).insertAfter($(target));
            }
        });
    });
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
    tooltip_trigger();
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
            element.instruction.toLowerCase().includes(text.toLowerCase()) ||
            element.rtl.toLowerCase().includes(text.toLowerCase()) ||
            element.notes?.toLowerCase().includes(text.toLowerCase())
        )
            instructions.append(build_mips_row(element));
    });
}
