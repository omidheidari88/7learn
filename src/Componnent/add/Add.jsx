import React from 'react';

const Add = ({tasksItem}) => {
	const categories = {
		finance: 'مالی',
		management: 'مدیریت',
		accountant: 'حسابداری',
	};
	const saveHandler = (e) => {
		e.preventDefault();
		const form = document.querySelector('#form');
		const formsItem = {
			title: form.task_title.value,
			category: form.task_category.value,
			assignee: form.task_assignee.value,
			status: form.task_status.value,
		};
		return tasksItem(formsItem);
	};
	return (
		<div>
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-header">ایجاد وظیفه جدید</div>
						<div className="card-body">
							<form id="form">
								<div className="form-group">
									<label htmlFor="task_title">عنوان</label>
									<input type="text" className="form-control" name="task_title" id="task_title" placeholder="عنوان وظیفه" />
								</div>
								<div className="form-group">
									<label htmlFor="task_category">دسته بندی</label>
									<select className="form-control" name="task_category" id="task_category">
										{Object.keys(categories).map((key) => (
											<option value={key}>{categories[key]}</option>
										))}
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="task_assignee">انجام دهنده</label>
									<input type="text" className="form-control" name="task_assignee" id="task_assignee" placeholder="انجام دهنده وظیفه" />
								</div>
								<div className="form-group">
									هزینه
									<br />
									<label className="switch">
										<input type="radio" className="switch" name="task_status" id="task_status" defaultChecked={true} value="1" />
										<span className="slider round"></span>
									</label>
									<br />
									درآمد
									<br />
									<label className="switch">
										<input type="radio" className="switch" name="task_status" id="task_status" value="2" />
										<span className="slider round"></span>
									</label>
								</div>

								<button onClick={(e) => saveHandler(e)} type="submit" className="btn btn-success">
									ذخیره اطلاعات
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Add;
