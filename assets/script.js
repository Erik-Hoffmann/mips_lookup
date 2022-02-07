// instruction table
let instruction_table;
let instructions;
// format table
let formats_table;
//regsiter table
let registers_table;

$(document).ready(() => {
    // instruction table with search
    instruction_table = $("#mips_instructions");
    instruction_table.append(mips_head());
    instructions = instruction_table.children("tbody");
    build_mips_table();
    document.getElementById("mips_search").addEventListener("input", (e) => {
        mips_search(e.srcElement.value);
    });
    tooltip_trigger();

    // format table
    formats_table = $("#mips_formats");
    formats_table.append(formats_head());
    build_formats_table();

    // register table
    registers_table = $("#mips_registers");
    registers_table.append(registers_head());
    build_registers_table();
});
