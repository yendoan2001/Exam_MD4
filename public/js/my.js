const chooseBranch = value => {
    axios.get('/admin/staffs/search/branch', {
        params: {
            branchId: value
        }
    }).then(res => {
        let data = res.data;
        let html = '';
        data.forEach((employee, index) => {
            html += `<tr>`;
            html += `<td>${employee.code}</td>`;
            html += ` <td><a href="/admin/staffs/detail/${employee._id}">${employee.name}</a></td>`;
            html += `<td>${employee.age}</td>`;
            html += `<td>${employee.salary}</td>`;
            html += `<td>${ (employee.branch) ? employee.branch.name : "None" }</td>`;
            html += `<td><a onclick="return confirm('Are you sure?')" href="/admin/staffs/delete/${employee._id}" class="btn btn-danger">Delete</a>
                         <a href="/admin/staffs/update/${employee._id}"class="btn btn-primary">Update</a>
                     </td>`;
            html += `</tr>`;
        })
        document.getElementById('list-staff').innerHTML = html;
    })
}