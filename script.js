/* =============================================================
   研究生适合度测试 · 完整逻辑 v3.0
   修复：雷达图乱码 / 全平台兼容 / 截图保存 / 题目科学化
   ============================================================= */

// ─── 问题库（25道，8个维度）────────────────────────────────
const questions = [

    // ── 维度1: 学术能力（权重0.22）──────────────────────────
    {
        id: 1, dimension: "学术能力", weight: 0.055,
        text: "你对某个学科或研究领域的好奇心程度如何？",
        options: [
            { value: 1, label: "几乎没有好奇心", description: "对学科知识缺乏兴趣" },
            { value: 2, label: "偶尔有一点", description: "遇到有趣知识才会关注" },
            { value: 3, label: "一般", description: "对某些话题会主动了解" },
            { value: 4, label: "比较强烈", description: "经常会主动追问为什么" },
            { value: 5, label: "非常强烈", description: "对未知事物保持持续探索欲" }
        ]
    },
    {
        id: 2, dimension: "学术能力", weight: 0.050,
        text: "你的自主学习能力和效率如何？",
        options: [
            { value: 1, label: "需要大量外部督促", description: "缺乏自驱力，难以坚持" },
            { value: 2, label: "能完成基本任务", description: "有任务才会主动学" },
            { value: 3, label: "一般，时好时差", description: "状态好时效率尚可" },
            { value: 4, label: "较强，能独立规划", description: "善于制定学习计划并执行" },
            { value: 5, label: "非常强，高度自律", description: "能长期自主高效学习" }
        ]
    },
    {
        id: 3, dimension: "学术能力", weight: 0.055,
        text: "你是否有过科研、调研或论文写作经历？完成情况如何？",
        options: [
            { value: 1, label: "完全没有", description: "从未接触科研相关工作" },
            { value: 2, label: "有过但感觉很吃力", description: "参与过但难以应对" },
            { value: 3, label: "有经历，完成度一般", description: "能完成但质量普通" },
            { value: 4, label: "有经历，完成得不错", description: "有产出，老师评价良好" },
            { value: 5, label: "经历丰富且有成果", description: "发表过作品或参赛获奖等" }
        ]
    },
    {
        id: 4, dimension: "学术能力", weight: 0.060,
        text: "你阅读专业文献、提炼核心信息的能力如何？",
        options: [
            { value: 1, label: "几乎看不懂文献", description: "专业论文读不进去" },
            { value: 2, label: "勉强能读，速度慢", description: "读文献很费力" },
            { value: 3, label: "一般，能读懂大意", description: "能提取主要信息" },
            { value: 4, label: "较好，能批判性阅读", description: "能分析文献优劣" },
            { value: 5, label: "很强，效率高", description: "能快速定位核心论点并综述" }
        ]
    },
    {
        id: 21, dimension: "学术能力", weight: 0.040,
        text: "你的本科成绩在班级/年级中大约处于什么水平？",
        options: [
            { value: 1, label: "后20%", description: "成绩偏弱" },
            { value: 2, label: "中下游（20–40%）", description: "中等偏下" },
            { value: 3, label: "中等（40–60%）", description: "成绩居中" },
            { value: 4, label: "中上游（前30%）", description: "成绩较好" },
            { value: 5, label: "前10%", description: "成绩优秀" }
        ]
    },
    {
        id: 23, dimension: "学术能力", weight: 0.040,
        text: "你每天能维持高效学习/工作状态的时间通常有多长？",
        options: [
            { value: 1, label: "不到2小时", description: "专注时间很短" },
            { value: 2, label: "2–4小时", description: "专注力一般" },
            { value: 3, label: "4–6小时", description: "中等水平" },
            { value: 4, label: "6–8小时", description: "专注力较强" },
            { value: 5, label: "8小时以上", description: "可以长时间保持高效状态" }
        ]
    },

    // ── 维度2: 心理素质（权重0.18）──────────────────────────
    {
        id: 5, dimension: "心理素质", weight: 0.055,
        text: "面对科研低谷期（长期无进展、重复性工作），你通常的状态是？",
        options: [
            { value: 1, label: "很容易焦虑崩溃", description: "进展慢就会严重影响状态" },
            { value: 2, label: "比较痛苦，需要安慰", description: "会持续低落，需要鼓励" },
            { value: 3, label: "会受影响但能撑过去", description: "调节周期较长" },
            { value: 4, label: "能较快调节恢复", description: "会找方法解决或转移注意" },
            { value: 5, label: "心态稳定，耐得住", description: "视低谷为常态，平静坚持" }
        ]
    },
    {
        id: 6, dimension: "心理素质", weight: 0.055,
        text: "遭遇挫折或失败后，你的心理恢复能力如何？",
        options: [
            { value: 1, label: "容易放弃，很难振作", description: "挫折后难以恢复" },
            { value: 2, label: "恢复较慢，需要较长时间", description: "挫折影响持续较久" },
            { value: 3, label: "最终能调整，但很消耗", description: "过程艰难但能撑住" },
            { value: 4, label: "比较快，会反思调整", description: "挫折后能分析原因继续" },
            { value: 5, label: "越挫越勇", description: "抗挫能力强，挫折变动力" }
        ]
    },
    {
        id: 7, dimension: "心理素质", weight: 0.060,
        text: "在高压、高不确定状态下，你的情绪稳定性如何？",
        options: [
            { value: 1, label: "情绪波动很大", description: "压力下容易失控" },
            { value: 2, label: "较难稳定，经常内耗", description: "焦虑感强，影响效率" },
            { value: 3, label: "基本稳定，偶有波动", description: "大多数时候能控制情绪" },
            { value: 4, label: "比较稳定，善于调节", description: "有良好的情绪管理方法" },
            { value: 5, label: "非常稳定", description: "高压下依然冷静理性" }
        ]
    },
    {
        id: 24, dimension: "心理素质", weight: 0.040,
        text: "如果读研过程中研究方向与预期完全不同，你会怎么做？",
        options: [
            { value: 1, label: "很难接受，可能选择退出", description: "无法适应预期以外的情况" },
            { value: 2, label: "很痛苦，勉强坚持", description: "适应困难，状态很差" },
            { value: 3, label: "有压力，但努力适应", description: "需要时间调整" },
            { value: 4, label: "能接受，重新规划", description: "灵活应对变化" },
            { value: 5, label: "把它当成新机会", description: "从不确定性中找到意义" }
        ]
    },

    // ── 维度3: 主观意愿（权重0.20）──────────────────────────
    {
        id: 8, dimension: "主观意愿", weight: 0.090,
        text: "以10分满分衡量，你现在有多想读研？",
        options: [
            { value: 1, label: "1–2分", description: "完全不想，只是在考虑" },
            { value: 2, label: "3–4分", description: "不太想，但没有更好的选择" },
            { value: 3, label: "5–6分", description: "想但也不确定" },
            { value: 4, label: "7–8分", description: "比较想，意愿较强" },
            { value: 5, label: "9–10分", description: "非常想，目标非常明确" }
        ]
    },
    {
        id: 9, dimension: "主观意愿", weight: 0.075, type: "multiple", scoring: "dynamic",
        text: "你读研的主要动机是什么？（可多选，选出真正驱动你的原因）",
        options: [
            { value: "escape",   scoreValue: 1, label: "暂时逃避就业压力",     description: "还没想好工作方向" },
            { value: "parents",  scoreValue: 1, label: "满足父母/家庭期望",    description: "家人希望我读研" },
            { value: "crowd",    scoreValue: 1, label: "跟随身边人",           description: "周围同学都在考研" },
            { value: "career",   scoreValue: 4, label: "职业发展需要学历",     description: "目标岗位需要研究生学历" },
            { value: "academic", scoreValue: 5, label: "热爱学术研究",         description: "想在某领域深入探索" },
            { value: "degree",   scoreValue: 3, label: "改变学历标签",         description: "希望提升学历竞争力" },
            { value: "interest", scoreValue: 4, label: "对专业方向有浓厚兴趣", description: "想系统深化专业知识" }
        ]
    },
    {
        id: 10, dimension: "主观意愿", weight: 0.050,
        text: "你对读研生活的实际情况了解程度如何？",
        options: [
            { value: 1, label: "完全不了解", description: "不清楚读研是什么状态" },
            { value: 2, label: "略有了解", description: "知道要写论文，其他不清楚" },
            { value: 3, label: "基本了解", description: "了解课程+科研+导师模式" },
            { value: 4, label: "比较了解", description: "了解选导师、开题、答辩流程" },
            { value: 5, label: "非常了解", description: "了解不同类型研究生的区别和难点" }
        ]
    },

    // ── 维度4: 社交适应（权重0.10）──────────────────────────
    {
        id: 11, dimension: "社交适应", weight: 0.045,
        text: "进入新环境（新城市/新学校）后，你融入集体生活的能力如何？",
        options: [
            { value: 1, label: "很难适应", description: "需要独处，集体生活让我不适" },
            { value: 2, label: "不太适应", description: "能忍受但不喜欢" },
            { value: 3, label: "随遇而安", description: "不太介意" },
            { value: 4, label: "比较适应", description: "善于与他人相处" },
            { value: 5, label: "非常适应", description: "很快能融入新环境" }
        ]
    },
    {
        id: 12, dimension: "社交适应", weight: 0.055,
        text: "你与导师/上级沟通的能力和主动性如何？",
        options: [
            { value: 1, label: "非常困难", description: "很难主动与权威人士交流" },
            { value: 2, label: "比较困难，倾向回避", description: "被动等待指令" },
            { value: 3, label: "一般，能完成基本沟通", description: "沟通顺畅但不主动" },
            { value: 4, label: "比较顺畅", description: "能主动汇报进度和问题" },
            { value: 5, label: "很好，善于主动沟通", description: "能有效管理师生关系" }
        ]
    },

    // ── 维度5: 经济能力（权重0.08）──────────────────────────
    {
        id: 13, dimension: "经济能力", weight: 0.040,
        text: "读研期间（约3年）的经济压力，你能承受吗？",
        options: [
            { value: 1, label: "压力极大，基本无法承受", description: "家庭无法支持，完全自费" },
            { value: 2, label: "有较大压力", description: "需精打细算，影响生活质量" },
            { value: 3, label: "有一定压力但能接受", description: "基本能负担，可申请奖学金" },
            { value: 4, label: "压力不大", description: "家庭条件尚可，无需担心" },
            { value: 5, label: "几乎没有经济压力", description: "经济条件良好，读研无负担" }
        ]
    },
    {
        id: 14, dimension: "经济能力", weight: 0.040,
        text: "你对读研期间「暂时没有工资收入」这件事的接受程度如何？",
        note: "考察经济预期的合理性",
        options: [
            { value: 1, label: "完全无法接受", description: "没有收入让我非常焦虑" },
            { value: 2, label: "很难接受，压力大", description: "对没有稳定收入很不安" },
            { value: 3, label: "有些顾虑但能接受", description: "知道读研期间有补贴可以支撑" },
            { value: 4, label: "能接受，有奖学金补贴", description: "已了解研究生津贴政策" },
            { value: 5, label: "完全接受，这是正常阶段", description: "把读研视为长期投资" }
        ]
    },

    // ── 维度6: 职业规划（权重0.12）──────────────────────────
    {
        id: 15, dimension: "职业规划", weight: 0.060,
        text: "你是否有明确的职业方向，且该方向明显需要研究生学历？",
        options: [
            { value: 1, label: "方向模糊，学历帮助不大", description: "不知道自己要做什么" },
            { value: 2, label: "方向不清，但读研可能有用", description: "还在探索中" },
            { value: 3, label: "方向基本确定，学历有帮助", description: "读研有加分但非必须" },
            { value: 4, label: "方向明确，研究生学历重要", description: "行业高度认可研究生学历" },
            { value: 5, label: "方向明确，必须读研才能入行", description: "如：高校教职/科研院所/临床医师等" }
        ]
    },
    {
        id: 16, dimension: "职业规划", weight: 0.060,
        text: "你认为「学历」是当前就业市场中一个不可忽视的门槛吗？",
        options: [
            { value: 1, label: "完全不认同，能力说话", description: "学历几乎无关紧要" },
            { value: 2, label: "不太认同，能力更重要", description: "学历被市场高估了" },
            { value: 3, label: "中立，两者同等重要", description: "视行业和岗位而定" },
            { value: 4, label: "比较认同，学历是重要筛选器", description: "学历明显影响入职门槛" },
            { value: 5, label: "非常认同，学历滤镜普遍存在", description: "许多岗位学历是硬性门槛" }
        ]
    },

    // ── 维度7: 独立能力（权重0.08）──────────────────────────
    {
        id: 17, dimension: "独立能力", weight: 0.040,
        text: "在没有固定课程结构的情况下，你能自我驱动推进项目吗？",
        options: [
            { value: 1, label: "很难，需要有人推着走", description: "没有任务框架就不知所措" },
            { value: 2, label: "比较困难，经常拖延", description: "自由时间大多被浪费" },
            { value: 3, label: "一般，需要外部激励", description: "有时能推进，有时拖" },
            { value: 4, label: "比较好，能自主推进", description: "能制定计划并基本执行" },
            { value: 5, label: "非常好，高度自驱", description: "研究型学习对我来说是享受" }
        ]
    },
    {
        id: 18, dimension: "独立能力", weight: 0.040,
        text: "遇到学习或生活中的困难，你独立解决问题的能力如何？",
        options: [
            { value: 1, label: "非常依赖他人帮忙", description: "离开支持会很不适应" },
            { value: 2, label: "比较依赖，适应期很长", description: "需要较长时间才能应对" },
            { value: 3, label: "一般，能慢慢解决", description: "适应后没问题" },
            { value: 4, label: "比较独立，适应快", description: "新环境能很快自我调整" },
            { value: 5, label: "非常独立，游刃有余", description: "独立解决问题是常态" }
        ]
    },

    // ── 维度8: 意义认知（权重0.10）──────────────────────────
    {
        id: 19, dimension: "意义认知", weight: 0.055,
        text: "「读研」对你个人成长的意义是什么？（选最符合的一项）",
        options: [
            { value: 1, label: "没什么特别意义", description: "只是不得已的选择" },
            { value: 2, label: "主要是拿个学历", description: "学历是最主要目的" },
            { value: 3, label: "积累经历，开拓视野", description: "读研是一段人生阅历" },
            { value: 4, label: "深化专业能力，找到方向", description: "通过读研找到真正热爱的事" },
            { value: 5, label: "探索未知，实现学术价值", description: "希望做出有意义的研究贡献" }
        ]
    },
    {
        id: 20, dimension: "意义认知", weight: 0.045,
        text: "「延缓就业换取能力提升」——你对这个选择的认可程度如何？",
        options: [
            { value: 1, label: "完全无法接受", description: "宁愿早点工作赚钱" },
            { value: 2, label: "很难接受", description: "觉得时间成本太高" },
            { value: 3, label: "可以接受，但有顾虑", description: "担心错过职场经验" },
            { value: 4, label: "比较认可", description: "相信读研能带来长期回报" },
            { value: 5, label: "非常认可，乐于接受", description: "愿意为长期积累投入时间" }
        ]
    },
    {
        id: 25, dimension: "意义认知", weight: 0.040,
        text: "如果不读研，你是否已有清晰且满意的替代路径？",
        note: "替代路径越清晰，读研的必要性相对越低",
        options: [
            { value: 5, label: "完全没有", description: "不读研的话完全不知道做什么" },
            { value: 4, label: "有想法但不清晰", description: "想直接工作但方向模糊" },
            { value: 3, label: "有一些想法", description: "可能做某些事，但不确定" },
            { value: 2, label: "有比较清晰的方案", description: "不读研也有较好出路" },
            { value: 1, label: "非常清晰且满意", description: "不读研也有极好的选择" }
        ]
    }
];

// ─── 维度配置 ────────────────────────────────────────────────
const dimensionConfig = {
    "学术能力": { weight: 0.22, icon: "学", desc: "知识储备、研究基础与学习效率" },
    "心理素质": { weight: 0.18, icon: "心", desc: "情绪稳定性、抗压力与韧性" },
    "主观意愿": { weight: 0.20, icon: "愿", desc: "读研动机强度与目标清晰度" },
    "社交适应": { weight: 0.10, icon: "社", desc: "集体生活适应与师生关系处理" },
    "经济能力": { weight: 0.08, icon: "经", desc: "读研期间的经济承受能力" },
    "职业规划": { weight: 0.12, icon: "职", desc: "职业方向明确度与学历需求" },
    "独立能力": { weight: 0.08, icon: "独", desc: "自驱力与独立解决问题的能力" },
    "意义认知": { weight: 0.10, icon: "值", desc: "读研价值感与人生意义认同" }
};

// ─── 背景调整系数 ────────────────────────────────────────────
const backgroundAdjustments = {
    education: {
        "985_211": 0.88, "double_first_only": 0.92, "first_tier": 1.00,
        "second_tier": 1.06, "junior_college": 1.12, "other": 1.03
    },
    major: {
        "cs_ee": 1.10, "civil_arch": 1.04, "mech_auto": 1.05,
        "chem_bio": 1.12, "physics_math": 1.15,
        "engineering_other": 1.03, "science_other": 1.08,
        "arts_humanities": 0.90, "law": 1.05, "economics": 0.95,
        "business": 0.93, "social_science": 0.90, "education": 1.00,
        "medicine_clinical": 1.20, "medicine_other": 1.08,
        "agriculture": 1.10, "arts_design": 0.85, "other": 1.00
    },
    gpa: function(gpa, scale) {
        var n = scale === '4' ? gpa : scale === '5' ? (gpa / 5) * 4 : (gpa / 100) * 4;
        if (n >= 3.7) return 1.10;
        if (n >= 3.3) return 1.05;
        if (n >= 2.7) return 1.00;
        if (n >= 2.0) return 0.96;
        return 0.92;
    },
    future_plan: {
        "further_study": 1.18, "public_service": 1.08, "state_owned": 1.06,
        "private_company": 0.96, "foreign_company": 0.92,
        "self_employed": 0.85, "none": 1.04
    }
};

// ─── 维度分析文案 ────────────────────────────────────────────
const dimensionAnalysis = {
    "学术能力": {
        high:   "学术基础与研究能力较为扎实，能较快适应研究生的学术要求。",
        medium: "学术能力处于中等水平，读研期间需主动强化文献阅读和研究方法训练。",
        low:    "学术基础相对薄弱，建议备考同步提升学术技能，否则读研初期会非常吃力。"
    },
    "心理素质": {
        high:   "心理承受能力较强，能应对科研低谷、延毕压力等读研特有挑战。",
        medium: "心理素质中等，需提前建立良好的情绪管理机制和支持系统。",
        low:    "心理承受能力偏弱，读研的不确定性和长期压力可能造成较大困扰，建议认真评估。"
    },
    "主观意愿": {
        high:   "读研意愿强烈，内驱动机是最核心的成功因素，非常有利。",
        medium: "读研意愿一般，建议明确想通过读研获得什么，避免因动力不足中途动摇。",
        low:    "读研意愿较弱，外部压力不是好的动机。建议先想清楚再做决定。"
    },
    "社交适应": {
        high:   "社交适应能力较好，能处理宿舍关系、师生关系等读研特有的社交场景。",
        medium: "社交适应能力中等，需提前做好调适，尤其是与导师的沟通方式。",
        low:    "社交适应能力偏弱，读研中的人际关系（尤其导师关系）可能是你的挑战。"
    },
    "经济能力": {
        high:   "经济方面无明显压力，可以专注学业，这是非常有利的条件。",
        medium: "经济有一定压力，建议提前了解奖学金政策和兼职机会，做好预算。",
        low:    "经济压力较大，需认真评估是否可通过奖学金、助学贷款等途径缓解。"
    },
    "职业规划": {
        high:   "职业规划清晰，且读研与目标高度匹配，读研的「必要性」很强。",
        medium: "职业方向有一定规划，读研有加分但非绝对必要，可结合行业实际判断。",
        low:    "职业规划较模糊，建议先明确方向再决定是否读研，避免「为读研而读研」。"
    },
    "独立能力": {
        high:   "自驱力和独立性较强，对研究生阶段「自主探索」的学习模式非常有利。",
        medium: "独立能力中等，需在本科阶段有意识地培养自主管理能力。",
        low:    "独立能力较弱，研究生需要大量自主探索，建议先强化再考虑读研。"
    },
    "意义认知": {
        high:   "对读研有较清晰的价值认同，能在困难时期找到坚持的意义。",
        medium: "对读研意义理解还不够深入，建议和研究生学长学姐多交流，建立现实期待。",
        low:    "对读研的价值感认同较低，可能导致「读了也后悔」的情况，需重新思考。"
    }
};

// ─── 全局变量 ────────────────────────────────────────────────
var currentQuestionIndex = 0;
var userAnswers = {};
var backgroundInfo = {};

// ─── 页面切换 ────────────────────────────────────────────────
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(function(p) {
        p.style.display = 'none';
        p.classList.remove('active');
    });
    var page = document.getElementById(pageId);
    if (!page) return;
    page.style.display = 'block';
    page.classList.add('active');
    window.scrollTo(0, 0);
}

// ─── 问卷逻辑 ────────────────────────────────────────────────
function initQuestionnaire() {
    var container = document.getElementById('question-container');
    container.innerHTML = '';

    var q = questions[currentQuestionIndex];
    var isMultiple = q.type === 'multiple';

    // 进度
    var pct = Math.round(((currentQuestionIndex + 1) / questions.length) * 90 + 10);
    document.getElementById('question-progress').style.width = pct + '%';
    document.getElementById('progress-label-text').textContent =
        (currentQuestionIndex + 1) + ' / ' + questions.length;

    // 维度标签
    document.getElementById('question-meta').innerHTML =
        '<span class="dimension-badge">维度：' + q.dimension + '</span>';

    // 构建选项HTML
    var optionsHtml = q.options.map(function(opt) {
        return '<div class="option' + (isMultiple ? ' multiple' : '') +
               '" data-value="' + opt.value + '">' +
               '<div class="option-content">' +
               '<div class="option-label">' + opt.label + '</div>' +
               '<div class="option-description">' + opt.description + '</div>' +
               '</div></div>';
    }).join('');

    container.innerHTML =
        (isMultiple ? '<div class="multiple-hint">☑ 可多选，选完后点「下一题」</div>' : '') +
        '<div class="question-text">Q' + (currentQuestionIndex + 1) + '. ' + q.text + '</div>' +
        '<div class="options">' + optionsHtml + '</div>';

    // 恢复已选答案
    var saved = userAnswers[q.id];
    document.querySelectorAll('.option').forEach(function(el) {
        var val = el.dataset.value;
        if (saved !== undefined) {
            if (isMultiple && Array.isArray(saved) && saved.indexOf(val) > -1) {
                el.classList.add('selected');
            } else if (!isMultiple && String(saved) === String(val)) {
                el.classList.add('selected');
            }
        }
        el.addEventListener('click', function() {
            if (navigator.vibrate) navigator.vibrate(6);
            if (isMultiple) {
                this.classList.toggle('selected');
                var sel = Array.from(document.querySelectorAll('.option.selected'))
                    .map(function(o) { return o.dataset.value; });
                userAnswers[q.id] = sel;
            } else {
                document.querySelectorAll('.option').forEach(function(o) {
                    o.classList.remove('selected');
                });
                this.classList.add('selected');
                userAnswers[q.id] = this.dataset.value;
                // 单选：250ms后自动跳下一题（最后一题除外）
                var isLast = currentQuestionIndex === questions.length - 1;
                if (!isLast) {
                    setTimeout(function() {
                        currentQuestionIndex++;
                        initQuestionnaire();
                    }, 250);
                }
            }
        });
    });

    // 按钮显示
    var prevBtn   = document.getElementById('prev-btn');
    var nextBtn   = document.getElementById('next-btn');
    var submitBtn = document.getElementById('submit-btn');
    var isLast    = currentQuestionIndex === questions.length - 1;
    prevBtn.style.display   = currentQuestionIndex > 0 ? 'flex' : 'none';
    nextBtn.style.display   = isLast ? 'none' : 'flex';
    submitBtn.style.display = isLast ? 'flex' : 'none';
}

function validateCurrentAnswer() {
    var q = questions[currentQuestionIndex];
    var ans = userAnswers[q.id];
    if (q.type === 'multiple') return ans && Array.isArray(ans) && ans.length > 0;
    return ans !== undefined && ans !== null;
}

// ─── 评分计算 ────────────────────────────────────────────────
function calculateScore() {
    var dimData = {};
    questions.forEach(function(q) {
        var ans = userAnswers[q.id];
        if (!ans) return;
        var norm = 0;
        if (q.type === 'multiple' && q.scoring === 'dynamic') {
            var vals = Array.isArray(ans) ? ans : [ans];
            var scoreSum = 0, maxPossible = 0;
            q.options.forEach(function(o) {
                if (vals.indexOf(String(o.value)) > -1) scoreSum += (o.scoreValue || 3);
                maxPossible += (o.scoreValue || 5);
            });
            norm = maxPossible > 0 ? scoreSum / maxPossible : 0;
        } else if (q.type === 'multiple') {
            var vals2 = Array.isArray(ans) ? ans : [ans];
            var sum = vals2.reduce(function(s, v) { return s + parseInt(v); }, 0);
            norm = (sum / vals2.length - 1) / 4;
        } else {
            norm = (parseInt(ans) - 1) / 4;
        }
        if (!dimData[q.dimension]) dimData[q.dimension] = { ws: 0, tw: 0 };
        dimData[q.dimension].ws += norm * q.weight;
        dimData[q.dimension].tw += q.weight;
    });

    var dimScores = {};
    var ows = 0, otw = 0;
    Object.keys(dimData).forEach(function(dim) {
        var d = dimData[dim];
        var s = d.tw > 0 ? (d.ws / d.tw) * 100 : 0;
        dimScores[dim] = Math.round(s);
        var dw = (dimensionConfig[dim] && dimensionConfig[dim].weight) || 0.1;
        ows += s * dw; otw += dw;
    });

    var baseScore = otw > 0 ? ows / otw : 50;
    var bg = backgroundInfo;
    var edAdj  = backgroundAdjustments.education[bg.education]  || 1.0;
    var majAdj = backgroundAdjustments.major[bg.major]          || 1.0;
    var gpaAdj = backgroundAdjustments.gpa(parseFloat(bg.gpa) || 3.0, bg.gpa_scale || '4');
    var fpAdj  = backgroundAdjustments.future_plan[bg.future_plan] || 1.0;
    var adj    = Math.pow(edAdj * majAdj * gpaAdj * fpAdj, 0.5);
    var final  = Math.min(98, Math.max(2, baseScore * adj));

    return {
        finalScore: Math.round(final),
        dimensionScores: dimScores,
        adjustments: { edAdj: edAdj, majAdj: majAdj, gpaAdj: gpaAdj, fpAdj: fpAdj }
    };
}

// ─── 反馈生成 ────────────────────────────────────────────────
function generateFeedback(result) {
    var s = result.finalScore, dims = result.dimensionScores;
    var title, summary;
    if      (s >= 82) { title = "高度适合读研";      summary = "在多个关键维度表现出色，具备较高的读研潜力，无论学术能力、主观意愿还是心理素质均有良好基础。"; }
    else if (s >= 68) { title = "比较适合读研";      summary = "具备读研的基本条件，大部分维度表现良好。在某些方面仍有提升空间，建议有针对性地强化薄弱维度。"; }
    else if (s >= 52) { title = "需谨慎考虑是否读研"; summary = "部分核心维度得分偏低，读研存在一定挑战。建议认真思考读研的动机和目标，并提前做好准备。"; }
    else if (s >= 38) { title = "目前适合度偏低";    summary = "多个关键维度存在明显短板，读研可能面临较大压力。建议先提升相关能力，或考虑其他发展路径。"; }
    else              { title = "暂时不建议盲目读研"; summary = "读研对你而言可能弊大于利。这不代表你能力不足，建议先探索更适合当下的方向，找到真正的兴趣和目标后再做决定。"; }

    var strengths  = Object.keys(dims).filter(function(d) { return dims[d] >= 68; });
    var weaknesses = Object.keys(dims).filter(function(d) { return dims[d] <  45; });
    return { title: title, summary: summary, strengths: strengths, weaknesses: weaknesses };
}

function generateEncouragement(score) {
    var pools = {
        high: [
            "测试告诉你的是概率，不是命运。很多在测试中「适合」读研的人，走了别的路也活得精彩。数据是参考，热情才是指南针。",
            "高分是个好消息，但记住：适合读研不等于你必须读研。人生有无数值得探索的路，这只是其中一条。"
        ],
        mid: [
            "中等得分意味着你站在开放的十字路口。这不是坏事——你有更多可能性，而不是被某条路绑住。",
            "不适合不代表不能，适合也不代表就要。最重要的是：你究竟想要什么？"
        ],
        low: [
            "测试告诉你的是概率，不是命运。很多在测试中「不适合」读研的人，最终活成了自己想要的样子——用自己的方式。",
            "得分偏低不等于你「不行」，只是说明当下这条路可能需要更多准备，或者别的路更适合现在的你。"
        ]
    };
    var pool = score >= 68 ? pools.high : score >= 45 ? pools.mid : pools.low;
    return pool[Math.floor(Math.random() * pool.length)];
}

// ─── 得分环动画 ─────────────────────────────────────────────
function animateScore(target) {
    var el = document.getElementById('final-score');
    var ring = document.getElementById('score-ring-circle');
    var circumference = 314;
    var current = 0;
    var step = target / 60;
    var timer = setInterval(function() {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current);
        if (ring) ring.style.strokeDashoffset = circumference - (current / 100) * circumference;
        if (current >= target) clearInterval(timer);
    }, 16);
}

// ─── 三个小指标卡 ────────────────────────────────────────────
function fillMiniCards(score, dimScores) {
    var container = document.getElementById('mini-cards');
    if (!container) return;
    var sorted = Object.keys(dimScores).sort(function(a, b) { return dimScores[b] - dimScores[a]; });
    var topDim   = sorted[0] || '—';
    var topScore = dimScores[topDim] || 0;
    var weakDim  = sorted[sorted.length - 1] || '—';
    var weakScore= dimScores[weakDim] || 0;
    var tier = score >= 82 ? 'A' : score >= 68 ? 'B' : score >= 52 ? 'C' : score >= 38 ? 'D' : 'E';
    var tierDesc = { A:'卓越潜力', B:'良好潜力', C:'中等潜力', D:'待提升', E:'需调整方向' }[tier];
    container.innerHTML =
        '<div class="mini-card"><span class="mini-icon">⚡</span><span class="mini-label">最强维度</span>' +
        '<span class="mini-value">' + topDim + '</span><span class="mini-sub">' + topScore + '% · 核心优势</span></div>' +
        '<div class="mini-card"><span class="mini-icon">◎</span><span class="mini-label">潜力等级</span>' +
        '<span class="mini-value">' + tier + '</span><span class="mini-sub">' + tierDesc + '</span></div>' +
        '<div class="mini-card"><span class="mini-icon">△</span><span class="mini-label">待提升项</span>' +
        '<span class="mini-value">' + weakDim + '</span><span class="mini-sub">' + weakScore + '% · 重点关注</span></div>';
}

// ─── Canvas 雷达图（完全原生绘制，彻底解决中文乱码）──────────
function drawRadarCanvas(dimScores) {
    var canvas = document.getElementById('radar-canvas');
    if (!canvas) return;

    // 根据屏幕宽度自适应尺寸
    var container = canvas.parentNode;
    var containerW = container.clientWidth || 320;
    var size = Math.min(containerW, 480);
    var dpr  = window.devicePixelRatio || 1;

    canvas.width  = size * dpr;
    canvas.height = Math.round(size * 0.85) * dpr;
    canvas.style.width  = size + 'px';
    canvas.style.height = Math.round(size * 0.85) + 'px';

    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var w = size, h = Math.round(size * 0.85);
    var cx = w / 2, cy = h / 2 + 4;
    var R  = Math.min(w, h) * 0.31;

    var labels = Object.keys(dimScores);
    var values = labels.map(function(k) { return dimScores[k] / 100; });
    var n = labels.length;
    var levels = 5;

    function ptX(i, r) { return cx + r * Math.cos((2 * Math.PI * i / n) - Math.PI / 2); }
    function ptY(i, r) { return cy + r * Math.sin((2 * Math.PI * i / n) - Math.PI / 2); }

    // 1. 背景网格
    for (var lv = 1; lv <= levels; lv++) {
        var r = R * lv / levels;
        ctx.beginPath();
        for (var i = 0; i < n; i++) {
            i === 0 ? ctx.moveTo(ptX(i, r), ptY(i, r)) : ctx.lineTo(ptX(i, r), ptY(i, r));
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(200,170,100,' + (lv === levels ? 0.35 : 0.18) + ')';
        ctx.lineWidth = lv === levels ? 1.5 : 1;
        ctx.stroke();
        if (lv % 2 === 0) {
            ctx.fillStyle = 'rgba(230,185,74,0.03)';
            ctx.fill();
        }
    }

    // 2. 轴线
    ctx.strokeStyle = 'rgba(200,170,100,0.28)';
    ctx.lineWidth = 1;
    for (var i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ptX(i, R), ptY(i, R));
        ctx.stroke();
    }

    // 3. 数据区域
    ctx.beginPath();
    for (var i = 0; i < n; i++) {
        var vr = values[i] * R;
        i === 0 ? ctx.moveTo(ptX(i, vr), ptY(i, vr)) : ctx.lineTo(ptX(i, vr), ptY(i, vr));
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(230,185,74,0.20)';
    ctx.fill();
    ctx.strokeStyle = '#e6b94a';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // 4. 数据点
    for (var i = 0; i < n; i++) {
        var vr = values[i] * R;
        ctx.beginPath();
        ctx.arc(ptX(i, vr), ptY(i, vr), 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#c9920a';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    // 5. 标签（Canvas原生绘制，完美支持中文，无乱码）
    var labelR = R + (size < 360 ? 28 : 34);
    var fontSize = size < 360 ? 11 : 12;
    ctx.font = '600 ' + fontSize + 'px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';

    for (var i = 0; i < n; i++) {
        var angle  = (2 * Math.PI * i / n) - Math.PI / 2;
        var lx     = cx + labelR * Math.cos(angle);
        var ly     = cy + labelR * Math.sin(angle);
        var scoreLy= ly;

        // 水平对齐
        var align = 'center';
        var cos   = Math.cos(angle);
        if      (cos < -0.3) align = 'right';
        else if (cos >  0.3) align = 'left';
        ctx.textAlign = align;

        // 垂直偏移
        var sin = Math.sin(angle);
        var textOffset  = sin < -0.3 ? -4  : sin > 0.3 ? 14 : 5;
        var scoreOffset = sin < -0.3 ? -18 : sin > 0.3 ? 28 : (cos < 0 ? 5 : 5);

        // 画维度名
        ctx.fillStyle = '#3a3028';
        ctx.fillText(labels[i], lx, ly + textOffset);

        // 画分数（金色小字）
        ctx.font = '600 ' + (fontSize - 1) + 'px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillStyle = '#c9920a';
        ctx.fillText(dimScores[labels[i]] + '%', lx, ly + scoreOffset);
        // 恢复字号
        ctx.font = '600 ' + fontSize + 'px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    }
}

// ─── 维度分析条 ──────────────────────────────────────────────
function showDimensionAnalysis(dimScores) {
    var container = document.getElementById('dimension-details');
    container.innerHTML = '';
    var sorted = Object.keys(dimScores).sort(function(a, b) { return dimScores[b] - dimScores[a]; });
    sorted.forEach(function(dim) {
        var score = dimScores[dim];
        var cfg   = dimensionConfig[dim] || {};
        var level = score >= 68 ? 'high' : score >= 45 ? 'medium' : 'low';
        var analysis = (dimensionAnalysis[dim] && dimensionAnalysis[dim][level]) || '';
        var item = document.createElement('div');
        item.className = 'dimension-item';
        item.innerHTML =
            '<div class="dimension-header">' +
              '<span class="dimension-name">' +
                '<span class="dimension-icon">' + (cfg.icon || dim[0]) + '</span>' + dim +
              '</span>' +
              '<span class="dimension-score">' + score + '%</span>' +
            '</div>' +
            '<div class="dimension-bar"><div class="dimension-progress" style="width:0%"></div></div>' +
            '<div class="dimension-desc">' + analysis + '</div>';
        container.appendChild(item);
        setTimeout(function() {
            item.querySelector('.dimension-progress').style.width = score + '%';
        }, 80);
    });
}

// ─── 主结果展示 ──────────────────────────────────────────────
function showResults() {
    var result   = calculateScore();
    var feedback = generateFeedback(result);

    showPage('result-page');

    document.getElementById('encouragement-text').textContent = generateEncouragement(result.finalScore);
    animateScore(result.finalScore);
    document.getElementById('recommendation-title').textContent = feedback.title;
    document.getElementById('recommendation-text').textContent  = feedback.summary;

    var tagsHtml =
        feedback.strengths.slice(0, 2).map(function(s) {
            return '<span class="tag tag-strength">✓ ' + s + '</span>';
        }).join('') +
        feedback.weaknesses.slice(0, 1).map(function(w) {
            return '<span class="tag tag-weakness">△ ' + w + '</span>';
        }).join('');
    document.getElementById('score-tags').innerHTML = tagsHtml;

    fillMiniCards(result.finalScore, result.dimensionScores);
    showDimensionAnalysis(result.dimensionScores);

    // 雷达图：等 DOM 渲染后绘制
    setTimeout(function() { drawRadarCanvas(result.dimensionScores); }, 100);
}

// ─── 保存图片（Canvas原生截图，全平台兼容）─────────────────
function saveResultImage(callback) {
    var result = calculateScore();
    var feedback = generateFeedback(result);
    var dims = result.dimensionScores;
    var score = result.finalScore;

    // 画布尺寸
    var W = 750, H = 1200;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var canvas = document.createElement('canvas');
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var golddark = '#8b6914', gold = '#e6b94a';

    // 背景
    ctx.fillStyle = '#e8edf5';
    ctx.fillRect(0, 0, W, H);

    // 顶部深色横幅
    ctx.fillStyle = '#1a1612';
    roundRect(ctx, 0, 0, W, 90, 0);
    ctx.fillStyle = gold;
    ctx.font = 'bold 18px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('✦', 32, 56);
    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    ctx.font = '15px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.fillText('研究生适合度测试 · 专属结果报告', 56, 56);

    // Hero左卡（结论）
    var grad = ctx.createLinearGradient(30, 110, 330, 250);
    grad.addColorStop(0, '#e8be50'); grad.addColorStop(1, '#c9920a');
    ctx.fillStyle = grad;
    roundRect(ctx, 30, 110, 300, 150, 18);
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 11px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('综合评估结论', 52, 140);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px "Noto Serif SC","PingFang SC","Microsoft YaHei",serif';
    ctx.fillText(feedback.title, 52, 170);
    ctx.font = '13px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    // 自动换行
    wrapText(ctx, feedback.summary, 52, 195, 255, 19);

    // Hero右卡（得分环）
    var grad2 = ctx.createLinearGradient(345, 110, 720, 260);
    grad2.addColorStop(0, '#d4a032'); grad2.addColorStop(1, '#b07c10');
    ctx.fillStyle = grad2;
    roundRect(ctx, 345, 110, 375, 150, 18);

    // 绘制得分环
    var ringCx = 440, ringCy = 185, ringR = 52;
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(ringCx, ringCy, ringR, 0, 2 * Math.PI);
    ctx.stroke();

    var endAngle = -Math.PI / 2 + (score / 100) * 2 * Math.PI;
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(ringCx, ringCy, ringR, -Math.PI / 2, endAngle);
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = 'bold 36px "Noto Serif SC","PingFang SC","Microsoft YaHei",serif';
    ctx.textAlign = 'center';
    ctx.fillText(score, ringCx, ringCy + 12);
    ctx.font = '13px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText('%  适合度', ringCx, ringCy + 32);

    ctx.fillStyle = 'rgba(255,255,255,0.78)';
    ctx.font = '13px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('适合度得分', 510, 140);

    // 三个小指标卡
    var labels = Object.keys(dims).sort(function(a,b){return dims[b]-dims[a];});
    var topDim = labels[0] || '—', weakDim = labels[labels.length-1] || '—';
    var tier = score >= 82?'A': score>=68?'B': score>=52?'C': score>=38?'D':'E';
    var tierDesc = {A:'卓越潜力',B:'良好潜力',C:'中等潜力',D:'待提升',E:'需调整方向'}[tier];
    var miniData = [
        {icon:'⚡', label:'最强维度', value: topDim, sub: dims[topDim]+'% · 核心优势'},
        {icon:'◎', label:'潜力等级', value: tier,    sub: tierDesc},
        {icon:'△', label:'待提升项', value: weakDim, sub: dims[weakDim]+'% · 重点关注'}
    ];
    miniData.forEach(function(m, i) {
        var mx = 30 + i * 238, my = 278;
        ctx.fillStyle = '#e8edf5';
        roundRect(ctx, mx, my, 218, 80, 14);
        ctx.fillStyle = golddark;
        ctx.font = '18px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(m.icon, mx + 109, my + 27);
        ctx.fillStyle = '#8a7d6e';
        ctx.font = '11px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillText(m.label, mx + 109, my + 42);
        ctx.fillStyle = '#1a1612';
        ctx.font = 'bold 16px "Noto Serif SC","PingFang SC","Microsoft YaHei",serif';
        ctx.fillText(m.value, mx + 109, my + 62);
        ctx.fillStyle = '#8a7d6e';
        ctx.font = '10px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillText(m.sub, mx + 109, my + 76);
    });

    // 雷达图卡片
    ctx.fillStyle = 'rgba(255,255,255,0.60)';
    roundRect(ctx, 20, 375, W - 40, 370, 18);
    ctx.fillStyle = '#1a1612';
    ctx.font = 'bold 16px "Noto Serif SC","PingFang SC","Microsoft YaHei",serif';
    ctx.textAlign = 'left';
    ctx.fillText('◈  能力维度图谱', 44, 405);

    // 绘制雷达图
    drawRadarOnCanvas(ctx, dims, W/2, 570, 140);

    // 维度分析卡片
    ctx.fillStyle = 'rgba(255,255,255,0.60)';
    roundRect(ctx, 20, 758, W - 40, 406, 18);
    ctx.fillStyle = '#1a1612';
    ctx.font = 'bold 16px "Noto Serif SC","PingFang SC","Microsoft YaHei",serif';
    ctx.textAlign = 'left';
    ctx.fillText('◉  维度深度分析', 44, 788);

    var sortedDims = Object.keys(dims).sort(function(a,b){return dims[b]-dims[a];});
    sortedDims.forEach(function(dim, idx) {
        var dy  = 808 + idx * 44;
        var sc  = dims[dim];
        var barW = (W - 80) * 0.62;
        var barX = 44, barY = dy + 14;

        // 维度名
        ctx.fillStyle = '#4a4035';
        ctx.font = '600 13px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(dim, barX, dy + 8);

        // 分数
        ctx.fillStyle = golddark;
        ctx.font = 'bold 13px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(sc + '%', barX + barW, dy + 8);

        // 进度条背景
        ctx.fillStyle = '#dce2ee';
        roundRect(ctx, barX, barY, barW, 7, 4);
        // 进度条填充
        var gradBar = ctx.createLinearGradient(barX, 0, barX + barW, 0);
        gradBar.addColorStop(0, '#fdf5e6');
        gradBar.addColorStop(1, gold);
        ctx.fillStyle = gradBar;
        roundRect(ctx, barX, barY, barW * sc / 100, 7, 4);
    });

    // 底部版权
    ctx.fillStyle = 'rgba(138,125,110,0.6)';
    ctx.font = '11px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('研究生适合度测试 · 结果仅供参考 · ' + new Date().toLocaleDateString('zh-CN'), W/2, H - 14);

    if (callback) callback(canvas);
}

// 雷达图绘制（用于截图Canvas）
function drawRadarOnCanvas(ctx, dimScores, cx, cy, R) {
    var labels = Object.keys(dimScores);
    var values = labels.map(function(k){ return dimScores[k]/100; });
    var n = labels.length, levels = 5;
    function px(i,r){ return cx + r*Math.cos(2*Math.PI*i/n - Math.PI/2); }
    function py(i,r){ return cy + r*Math.sin(2*Math.PI*i/n - Math.PI/2); }

    // 网格
    for(var lv=1;lv<=levels;lv++){
        var r=R*lv/levels;
        ctx.beginPath();
        for(var i=0;i<n;i++){ i===0?ctx.moveTo(px(i,r),py(i,r)):ctx.lineTo(px(i,r),py(i,r)); }
        ctx.closePath();
        ctx.strokeStyle='rgba(200,170,100,'+(lv===levels?0.35:0.18)+')';
        ctx.lineWidth=lv===levels?1.5:1;
        ctx.stroke();
    }
    // 轴线
    ctx.strokeStyle='rgba(200,170,100,0.28)'; ctx.lineWidth=1;
    for(var i=0;i<n;i++){
        ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(px(i,R),py(i,R)); ctx.stroke();
    }
    // 数据
    ctx.beginPath();
    for(var i=0;i<n;i++){ var vr=values[i]*R; i===0?ctx.moveTo(px(i,vr),py(i,vr)):ctx.lineTo(px(i,vr),py(i,vr)); }
    ctx.closePath();
    ctx.fillStyle='rgba(230,185,74,0.22)'; ctx.fill();
    ctx.strokeStyle='#e6b94a'; ctx.lineWidth=2; ctx.lineJoin='round'; ctx.stroke();
    // 点
    for(var i=0;i<n;i++){
        var vr=values[i]*R;
        ctx.beginPath(); ctx.arc(px(i,vr),py(i,vr),4,0,2*Math.PI);
        ctx.fillStyle='#c9920a'; ctx.fill();
        ctx.strokeStyle='white'; ctx.lineWidth=1.5; ctx.stroke();
    }
    // 标签
    var labelR=R+38;
    ctx.font='600 11px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    for(var i=0;i<n;i++){
        var angle=2*Math.PI*i/n-Math.PI/2;
        var lx=cx+labelR*Math.cos(angle), ly=cy+labelR*Math.sin(angle);
        var cos=Math.cos(angle), sin=Math.sin(angle);
        ctx.textAlign = cos<-0.25?'right': cos>0.25?'left':'center';
        var tdy = sin<-0.25?-2: sin>0.25?12:5;
        var sdy = sin<-0.25?-14: sin>0.25?24:(cos<0?5:5);
        ctx.fillStyle='#3a3028'; ctx.font='600 11px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillText(labels[i], lx, ly+tdy);
        ctx.fillStyle='#c9920a'; ctx.font='600 10px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillText(dimScores[labels[i]]+'%', lx, ly+sdy);
    }
}

// 辅助：圆角矩形
function roundRect(ctx, x, y, w, h, r) {
    if (w < 2*r) r = w/2; if (h < 2*r) r = h/2;
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y, x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r);
    ctx.arcTo(x, y, x+w, y, r);
    ctx.closePath();
    ctx.fill();
}

// 辅助：自动换行
function wrapText(ctx, text, x, y, maxW, lineH) {
    var words = text.split(''), line = '', lines = [];
    words.forEach(function(ch) {
        var test = line + ch;
        if (ctx.measureText(test).width > maxW && line.length > 0) {
            lines.push(line); line = ch;
        } else { line = test; }
    });
    if (line) lines.push(line);
    lines.slice(0, 3).forEach(function(l, i) { ctx.fillText(l, x, y + i * lineH); });
}

// ─── Toast提示 ───────────────────────────────────────────────
function showToast(msg) {
    var toast = document.getElementById('save-toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 2800);
}

// ─── 下载/分享图片 ───────────────────────────────────────────
function downloadCanvas(canvas, filename) {
    try {
        var link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('图片已保存！请在下载文件夹查看');
    } catch(e) {
        showToast('保存失败，请长按图片手动保存');
    }
}

// ─── 事件监听 ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

    // 开始测试
    document.getElementById('start-btn').addEventListener('click', function() {
        if (navigator.vibrate) navigator.vibrate(6);
        showPage('background-page');
    });

    // 背景信息 → 问卷
    document.getElementById('next-to-questionnaire').addEventListener('click', function() {
        var edu    = document.getElementById('education').value;
        var maj    = document.getElementById('major').value;
        var scale  = document.getElementById('gpa_scale').value;
        var gpaRaw = document.getElementById('gpa').value.trim();
        var fp     = document.getElementById('future_plan').value;

        if (!edu || !maj || !gpaRaw || !fp) {
            alert('请完整填写所有背景信息后再继续');
            return;
        }
        var gpaNum = parseFloat(gpaRaw);
        var maxGpa = scale === '4' ? 4 : scale === '5' ? 5 : 100;
        if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > maxGpa) {
            alert('GPA数值不合法，' + scale + '分制下应在 0–' + maxGpa + ' 之间');
            return;
        }
        backgroundInfo = { education: edu, major: maj, gpa_scale: scale, gpa: gpaRaw, future_plan: fp };
        showPage('questionnaire-page');
        currentQuestionIndex = 0;
        initQuestionnaire();
    });

    // 上一题
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (navigator.vibrate) navigator.vibrate(6);
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            initQuestionnaire();
        }
    });

    // 下一题
    document.getElementById('next-btn').addEventListener('click', function() {
        if (!validateCurrentAnswer()) { alert('请先选择答案再继续'); return; }
        if (navigator.vibrate) navigator.vibrate(6);
        currentQuestionIndex++;
        initQuestionnaire();
    });

    // 提交
    document.getElementById('submit-btn').addEventListener('click', function() {
        if (!validateCurrentAnswer()) { alert('请先选择答案再提交'); return; }
        if (navigator.vibrate) navigator.vibrate(6);
        showResults();
    });

    // 重新测试
    document.getElementById('restart-btn').addEventListener('click', function() {
        currentQuestionIndex = 0;
        userAnswers = {};
        backgroundInfo = {};
        showPage('welcome-page');
    });

    // 保存图片
    document.getElementById('save-btn').addEventListener('click', function() {
        var btn = this;
        btn.textContent = '生成中…';
        btn.disabled = true;
        if (navigator.vibrate) navigator.vibrate(6);
        var score = document.getElementById('final-score').textContent;

        // 确保雷达图数据计算完毕
        setTimeout(function() {
            saveResultImage(function(canvas) {
                btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> 保存图片';
                btn.disabled = false;

                // iOS Safari 不支持 a.download，弹出图片让用户长按保存
                var ua = navigator.userAgent;
                var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
                if (isIOS) {
                    var dataUrl = canvas.toDataURL('image/png');
                    var win = window.open();
                    win.document.write('<img src="' + dataUrl + '" style="max-width:100%" /><p style="font-family:sans-serif;text-align:center;color:#666">长按图片 → 存储到相册</p>');
                    showToast('请长按图片保存到相册');
                } else {
                    downloadCanvas(canvas, '读研适合度_' + score + '%.png');
                }
            });
        }, 50);
    });

    // 分享
    document.getElementById('share-btn').addEventListener('click', function() {
        if (navigator.vibrate) navigator.vibrate(6);
        var score = document.getElementById('final-score').textContent;
        var title = document.getElementById('recommendation-title').textContent;
        var text  = '我参加了研究生适合度测试，综合适合度得分 ' + score + '%，评估结论：「' + title + '」';

        if (navigator.share) {
            // 尝试分享图片
            saveResultImage(function(canvas) {
                canvas.toBlob(function(blob) {
                    var file = new File([blob], 'result.png', { type: 'image/png' });
                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        navigator.share({ title: '研究生适合度测试', text: text, files: [file] })
                            .catch(function() { navigator.share({ title: '研究生适合度测试', text: text }); });
                    } else {
                        navigator.share({ title: '研究生适合度测试', text: text, url: window.location.href });
                    }
                }, 'image/png');
            });
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() { showToast('结果已复制到剪贴板'); });
        } else {
            prompt('复制以下内容分享：', text);
        }
    });

    // 窗口resize时重绘雷达图
    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            var canvas = document.getElementById('radar-canvas');
            if (canvas && canvas.width > 0) {
                var result = calculateScore();
                drawRadarCanvas(result.dimensionScores);
            }
        }, 200);
    });
});