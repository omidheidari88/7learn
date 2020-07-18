import React from 'react';

const Add = () => {
	return (
		<div>
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-header">ایجاد وظیفه جدید</div>
						<div className="card-body">
							<form method="POST" action="/tasks/add">
								<div className="form-group">
									<label htmlFor="task_title">عنوان</label>
									<input type="text" className="form-control" name="task_title" id="task_title" placeholder="عنوان وظیفه" />
								</div>
								<div className="form-group">
									<label htmlFor="task_category">دسته بندی</label>
									<select className="form-control" name="task_category" id="task_category">
										<option value="مالی">مالی</option>
										<option value="مدیریت">مدیریت</option>
										<option value="حسابداری">حسابداری</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="task_assignee">انجام دهنده</label>
									<input type="text" className="form-control" name="task_assignee" id="task_assignee" placeholder="انجام دهنده وظیفه" />
								</div>
								<button type="submit" className="btn btn-success">
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
