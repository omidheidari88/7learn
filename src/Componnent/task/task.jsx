import React from 'react';
import Toman from '../../Partials/Currency/Toman';
import Phone from '../../Partials/Phone';
import {getCategoryByKey} from '../../Utility/Category';
const Item = ({title, category, price, status, phone}) => {
	return (
		<tr>
			<td>{title}</td>
			<td>{getCategoryByKey(category)}</td>
			<td>
				<Toman amount={price} />
			</td>
			<td>
				<Phone number={phone} />
			</td>

			<td>
				<span className={`badge badge-${status > 1 ? 'success' : 'danger'}`}>{status > 1 ? 'درآمد' : 'هزینه'}</span>
			</td>
			<td>
				<a href="/#">
					<i className="material-icons">edit</i>
				</a>
				<a href="/#">
					<i className="material-icons">delete</i>
				</a>
			</td>
		</tr>
	);
};

export default Item;
