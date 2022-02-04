let mips = [
            {
                "instruction": "sll $rd, $rt, shamt",
                "rtl": "R[$rd] ← R[$rt] << shamt",
                "type": "R"
            },{
        
                "instruction": "srl $rd, $rt, shamt",
                "rtl": "R[$rd] ← R[$rt] >> shamt",
                "notes": "Unsigned right shift ",
                "type": "R"
            },{
        
                "instruction": "sra $rd, $rt, shamt",
                "rtl": "R[$rd] ← R[$rt] >> shamt",
                "notes": "Signed right shift ",
                "type": "R"
            },{
        
                "instruction": "sllv $rd, $rt, $rs",
                "rtl": "R[$rd] ← R[$rt] << R[$rs]",
                "type": "R"
            },{
        
                "instruction": "srlv $rd, $rt, $rs",
                "rtl": "R[$rd] ← R[$rt] >> R[$rs]",
                "notes": "Unsigned right shift ",
                "type": "R"
            },{
        
                "instruction": "srav $rd, $rt, $rs",
                "rtl": "R[$rd] ← R[$rt] >> R[$rs]",
                "notes": "Signed right shift ",
                "type": "R"
            },{
        
                "instruction": "jr $rs",
                "rtl": "PC ← R[$rs]",
                "notes": "R[$rs] must be a multiple of 4 ",
                "type": "R"
            },{
        
                "instruction": "jalr $rd, $rs",
                "rtl": "tmp ← R[$rs]\nR[$rd] ← PC + 8\nPC ← tmp",
                "notes": "R[$rs] must be a multiple of 4; Undefined if $rs = $rd ",
                "type": "R"
            },{
        
                "instruction": "jalr $rs",
                "rtl": "(special form of “jalr $rd, $rs” where $rd = 31, implicitly) ",
                "type": "R"
            },{
        
                "instruction": "syscall",
                "rtl": "System Call",
                "type": "R"
            },{
        
                "instruction": "mfhi $rd",
                "rtl": "R[$rd] ← HI",
                "type": "R"
            },{
        
                "instruction": "mthi $rs",
                "rtl": "HI ← R[$rs]",
                "type": "R"
            },{
        
                "instruction": "mflo $rd",
                "rtl": "R[$rd] ← LO",
                "type": "R"
            },{
        
                "instruction": "mtlo $rs",
                "rtl": "LO ← R[$rs]",
                "type": "R"
            },{
        
                "instruction": "mult $rs, $rt",
                "rtl": "{HI, LO},{ ← R[$rs] * R[$rt]",
                "notes": "Signed multiplication",
                "type": "R"
            },{
        
                "instruction": "multu $rs, $rt",
                "rtl": "{HI, LO},{ ← R[$rs] * R[$rt]",
                "notes": "Unsigned multiplication",
                "type": "R"
            },{
        
                "instruction": "div $rs, $rt",
                "rtl": "LO ← R[$rs] / R[$rt]\nHI ← R[$rs] % R[$rt]",
                "notes": "Signed division ",
                "type": "R"
            },{
        
                "instruction": "divu $rs, $rt",
                "rtl": "LO ← R[$rs] / R[$rt]\nHI ← R[$rs] % R[$rt]",
                "notes": "Unsigned division ",
                "type": "R"
            },{
        
                "instruction": "add $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] + R[$rt]",
                "notes": "Exception on signed overflow ",
                "type": "R"
            },{
        
                "instruction": "addu $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] + R[$rt]",
                "type": "R"
            },{
        
                "instruction": "sub $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] - R[$rt]",
                "notes": "Exception on signed overflow ",
                "type": "R"
            },{
        
                "instruction": "subu $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] - R[$rt]",
                "type": "R"
            },{
        
                "instruction": "and $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] & R[$rt]",
                "type": "R"
            },{
        
                "instruction": "or $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] | R[$rt]",
                "type": "R"
            },{
        
                "instruction": "xor $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] ^ R[$rt]",
                "type": "R"
            },{
        
                "instruction": "nor $rd, $rs, $rt",
                "rtl": "R[$rd] ← !(R[$rs] | R[$rt])",
                "type": "R"
            },{
        
                "instruction": "slt $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] < R[$rt]",
                "notes": "Signed comparison ",
                "type": "R"
            },{
        
                "instruction": "sltu $rd, $rs, $rt",
                "rtl": "R[$rd] ← R[$rs] < R[$rt]",
                "notes": "Unsigned comparison ",
                "type": "R"
            },{
        
                "instruction": "j address",
                "rtl": "PC ← {(PC + 4)[31:28], address, 00},{ ",
                "type": "J"
            },{
        
                "instruction": "jal address",
                "rtl": "R[31] ← PC + 8\nPC ← {(PC + 4)[31: 28], address,00},{ ",
                "type": "J"
            },{
        
                "instruction": "beq $rs, $rt, imm",
                "rtl": "if(R[$rs] = R[$rt])\nPC ← PC + 4 + SignExt18b({imm,00},{)",
                "type": "I"
            },{
        
                "instruction": "bne $rs, $rt, imm",
                "rtl": "if(R[$rs] != R[$rt])\nPC ← PC + 4 + SignExt18b({imm,00},{)",
                "type": "I"
            },{
        
                "instruction": "blez $rs, imm",
                "rtl": "if(R[$rs] <= 0)\nPC ← PC + 4 + SignExt18b({imm,00},{)",
                "notes": "Signed comparison ",
                "type": "I"
            },{
        
                "instruction": "bgtz $rs, imm",
                "rtl": "if(R[$rs] > 0)\nPC ← PC + 4 + SignExt18b({imm,00},{)",
                "notes": "Signed comparison ",
                "type": "I"
            },{
        
                "instruction": "addi $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] + SignExt16b(imm)",
                "notes": "Exception on signed overflow ",
                "type": "I"
            },{
        
                "instruction": "addiu $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] + SignExt16b(imm)",
                "type": "I"
            },{
        
                "instruction": "slti $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] < SignExt16b(imm)",
                "notes": "Signed comparison ",
                "type": "I"
            },{
        
                "instruction": "sltiu $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] < SignExt16b(imm)",
                "notes": "Unsigned comparison ",
                "type": "I"
            },{
        
                "instruction": "andi $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] & {0 × 16, imm},{",
                "type": "I"
            },{
        
                "instruction": "ori $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] | {0 × 16, imm},{",
                "type": "I"
            },{
        
                "instruction": "xori $rt, $rs, imm",
                "rtl": "R[$rt] ← R[$rs] ^ {0 × 16, imm},{",
                "type": "I"
            },{
        
                "instruction": "lui $rt, imm",
                "rtl": "R[$rt] ← {(imm)[15:0], 0 × 16},{",
                "type": "I"
            },{
        
                "instruction": "lb $rt, imm($rs)",
                "rtl": "R[$rt] ← SignExt8b(Mem1B(R[$rs] + SignExt16b(imm)))",
                "type": "I"
            },{
        
                "instruction": "lh $rt, imm($rs)",
                "rtl": "R[$rt] ← SignExt16b(Mem2B(R[$rs] + SignExt16b(imm)))",
                "notes": "Computed address must be a multiple of 2 ",
                "type": "I"
            },{
        
                "instruction": "lw $rt, imm($rs)",
                "rtl": "R[$rt] ← Mem4B(R[$rs] + SignExt16b(imm))",
                "notes": "Computed address must be a multiple of 4 ",
                "type": "I"
            },{
        
                "instruction": "lbu $rt, imm($rs)",
                "rtl": "R[$rt] ← {0 × 24, Mem1B(R[$rs] + SignExt16b(imm))},{",
                "type": "I"
            },{
        
                "instruction": "lhu $rt, imm($rs)",
                "rtl": "R[$rt] ← {0 × 16, Mem2B(R[$rs] + SignExt16b(imm))},{",
                "notes": "Computed address must be a multiple of 2 ",
                "type": "I"
            },{
        
                "instruction": "sb $rt, imm($rs)",
                "rtl": "Mem1B(R[$rs] + SignExt16b(imm)) ← (R[$rt])[7:0]",
                "type": "I"
            },{
        
                "instruction": "sh $rt, imm($rs)",
                "rtl": "Mem2B(R[$rs] + SignExt16b(imm)) ← (R[$rt])[15:0]",
                "notes": "Computed address must be a multiple of 2 ",
                "type": "I"
            },{
        
                "instruction": "sw $rt, imm($rs)",
                "rtl": "Mem4B(R[$rs] + SignExt16b(imm)) ← R[$rt]",
                "notes": "Computed address must be a multiple of 4 ",
                "type": "I"
            }
    ]
let formats = [
        {
            "type": "R-Type",
            "31-26":"opcode",
            "25-21":"$rs",
            "20-16":"$rt",
            "15-11":"$rd",
            "10-06":"shamt",
            "05-00":"funct" 
        },
        {
            "type":"I-Type"
            ,"31-26":"opcode",
            "25-21":"$rs",
            "20-16":"$rt",
            "15-00":"imm"
        },
        {
            "type":"J-Type",
            "31-26":"opcode",
            "25-00":"address"
        }
    ]
