let myArrays = [{"SNO":"74","IPPIS_NO":"77513","FULL_NAME":"OKIKE  ODANWU PETER","RANK":"CHIEF ADMIN OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"FEDERAL MINISTRY OF POWER","APPROVED_MDA":"FEDERAL MINISTRY OF HUMANITARIAN AFFAIRS AND DISASTER MANAGEMENT","DEPARTMENT":"HRM","REMARK":"Select Remark","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/1/2004","DATE_OF_APPOINTMENT":"5/1/04"},
{"SNO":"75","IPPIS_NO":"1876","FULL_NAME":"UDEME AKPAN ELIZABETH","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"MINISTRY OF DEFENCE  MOD","APPROVED_MDA":"FEDERAL MINISTRY OF NIGER DELTA AFFAIRS","DEPARTMENT":"GENERAL SERVICES","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/2/04","DATE_OF_APPOINTMENT":"5/2/04"},
{"SNO":"76","IPPIS_NO":"33412","FULL_NAME":"BABA UMARU SALIHA","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"STATE HOUSE","APPROVED_MDA":"OFFICE OF THE HEAD OF THE CIVIL SERVICE OF THE FEDERATION (CMO)","DEPARTMENT":"EMD (AOD)","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/3/04","DATE_OF_APPOINTMENT":"5/3/04"},
{"SNO":"77","IPPIS_NO":"16944","FULL_NAME":"JOSHUA AJIMALUFIN EGBEBI","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"OFFICE OF THE HEAD OF CIVIL SERVICE OF THE FEDERATION","APPROVED_MDA":"BUDGET OFFICE OF THE FEDERATION","DEPARTMENT":"REVENUE & FISCAL POLICY DEPARTMENT","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/4/04","DATE_OF_APPOINTMENT":"5/4/04"},
{"SNO":"78","IPPIS_NO":"89203","FULL_NAME":"OLUFEMI  OGUNSANMI SUNDAY","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"OFFICE OF THE HEAD OF CIVIL SERVICE OF THE FEDERATION","APPROVED_MDA":"FEDERAL MENISTRY OF LABOUR AND EMPLOYMENT","DEPARTMENT":"HRM","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/5/04","DATE_OF_APPOINTMENT":"5/5/04"},
{"SNO":"80","IPPIS_NO":"167885","FULL_NAME":"GWANI RABI","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"FEDERAL MINISTRY OF MINES AND STEEL DEVELOPMENT","APPROVED_MDA":"NEW PARTNERSHIP FOR AFRICAS DEVELOPMENT NEPAD","DEPARTMENT":"PRSD","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/6/04","DATE_OF_APPOINTMENT":"5/6/04"},
{"SNO":"81","IPPIS_NO":"205524","FULL_NAME":"MASARI IBRAHIM ABDULLAHI","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"FEDERAL MINISTRY OF WORKS","APPROVED_MDA":"FEDERAL MINISTRY OF SPECIAL DUTIES AND INTER-GOVERNMENTAL AFFAIRS","DEPARTMENT":"","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/7/04","DATE_OF_APPOINTMENT":"5/7/04"},
{"SNO":"82","IPPIS_NO":"55297","FULL_NAME":"YUSUF  DALHATU ZAINAB","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"OFFICE OF THE ACCOUNTANT GENERAL OF THE FEDERATION","APPROVED_MDA":"FEDERAL MINISTRY OF AVIATION","DEPARTMENT":"DATM (IR)","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/8/04","DATE_OF_APPOINTMENT":"5/8/04"},
{"SNO":"83","IPPIS_NO":"88625","FULL_NAME":"HENRY  ONIESI ONORIODE","RANK":"CHIEF ADMINISTRATIVE OFFICER","SGL":"GL14CONPSS","PRESENT_MDA":"FEDERAL MINISTRY OF TRANSPORT","APPROVED_MDA":"OFFICE OF THE SENIOR SPECIAL ASSISTANT TO THE PRESIDENT ON SDGs","DEPARTMENT":"","REMARK":"To fill a Vacancy","CADRE":"ADMIN","DATE_OF_RETIREMENT":"5/9/04","DATE_OF_APPOINTMENT":"5/9/04"},
{"SNO":"85","IPPIS_NO":"154818","FULL_NAME":"SHUAIB NASIRU","RANK":"ASSISTANT CHIEF ADMINISTRATIVE OFFICER","SGL":"GL13CONPSS","PRESENT_MDA":"FEDERAL MINISTRY OF FINANCE","APPROVED_MDA":"STATE HOUSE","DEPARTMENT":"OFFICE OF THE PERMANENT SECRETRY","REMARK":"On Request","CADRE":"ADMINISTRATIVE","DATE_OF_RETIREMENT":"5/10/04","DATE_OF_APPOINTMENT":"5/10/04"}];

const min = [
{"Ministry" : "MINISTRY of Aviation"},
{"Ministry" : "MINISTRY of Agriculture and Rural Development",  "selected" : true},
{"Ministry" : "MINISTRY of Defence"},
{"Ministry" : "MINISTRY of Education"},
{"Ministry" : "Ministry of Finance"},
{"Ministry" : "Ministry of Transport"},
{"Ministry" : "Ministry of Labour"},
{"Ministry" : "Ministry of Petroleum"},
{"Ministry" : "Ministry of Power"},
{"Ministry" : "Ministry of Water Resources"},
{"Ministry" : "Office of the Head of Civil Service of the Federation"},
{"Ministry"  : "Office of the Secretary General of the Federation"},
{"Ministry"  : "State House."},
{"Ministry" : "Ministry of Information."},
{"Ministry"  : "Office of the Accountant General of the Federation."}
];


const selectTool = document.querySelector("#minSelect");

min.forEach(option =>
    selectTool.add(
      new Option(option.Ministry, option.selected)
    )
  );
buildTables(myArrays);

function buildTables(datas) {
let tables = document.getElementById('success');
    tables.innerHTML = "";

    for (var i = 0; i < datas.length; i++){
        var rowes = `<tr id=${datas[i].IPPIS_NO}>
                        <td class="table-data">${datas[i].SNO}</td>
                        <td class="table-data">${datas[i].IPPIS_NO}</td>
                        <td class="table-data">${datas[i].FULL_NAME}</td>
                        <td class="table-data">${datas[i].RANK}</td>
                        <td class="table-data">${datas[i].SGL}</td>
                        <td class="table-data">${datas[i].DATE_OF_APPOINTMENT}</td>
                        <td class="table-data">${datas[i].PRESENT_MDA}</td>
                        <td class="table-data" id="table-data">${datas[i].APPROVED_MDA}</td>
                        <td class="table-data" id='table${datas[i].IPPIS_NO}'>  </td>
                        <td class="table-datas" id='but${datas[i].IPPIS_NO}' onClick="postdata(${datas[i].IPPIS_NO})"> <button class="search-btn" id="search-btn">Post</button> </td>
                    </tr>`
        tables.innerHTML += rowes
    }
}

function postdata(id) {
const keys = Object.keys(min);
const len = keys.length;
const rnd = Math.floor(Math.random() * len);
const key = min[keys[rnd]];

const checking = document.getElementById(`table${id}`);
console.log(checking);
const checkin = document.createElement("span");
checkin.classList.add('table-data');
checkin.innerHTML = key.Ministry;
checking.append(checkin);


const failed = document.getElementById(`but${id}`);
failed.style.display = 'none';

}
