import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classNames from 'classnames/bind';
import Image from '../Image';
import Button from '../Button';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ key, src, name, price, productId, ...props }) {
    return (
        <div key={key} className={cx('product-item')}>
            <div className={cx('inner')}>
                <div className="relative">
                    <Image src={src} alt={name} className={cx('product-image')} />
                    <span className={cx('product-tag')}>New</span>
                </div>
            </div>
            <div className="pt-4">
                <h3 className={cx('product-name')}>{name}</h3>
                <Link to={`/productdetail/${productId}`}>
                    <Button viewProduct className="w-full">
                        <span className={cx('product-view')}>
                            VIEW PRODUCT - <span className={cx('product-price')}>${price}</span>
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ProductItem;
