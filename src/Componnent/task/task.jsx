import React from 'react';
import Toman from '../../Partials/Currency/Toman';
import Phone from '../../Partials/Phone';
import {getCategoryByKey} from '../../Utility/Category';
const Item = ({title, id, url, avatar, email, name, address}) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{address.city}</td>
			<td>{address.number}</td>
			<td>
				<img src={avatar} alt="#x" />
			</td>
			{/* <td>{title}</td>
			<td>{getCategoryByKey(category)}</td>
			<td>
				<Toman amount={price} />
			</td>
			<td>
				<Phone number={phone} />
			</td>

			<td>
				<span className={`badge badge-${status > 1 ? 'success' : 'danger'}`}>{status > 1 ? 'درآمد' : 'هزینه'}</span>
			</td> */}
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
