import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import './Collapsible.style.scss';

function Collapsible({ list }) {
  // Toggle content
  const toggleContent = (content) => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };

  // Collapse all open content
  const collapseAllOpenContent = () => {
    const collapsible = document.querySelectorAll('.collapsible');

    collapsible.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        toggleContent(item.nextElementSibling);
      }
    });
  };

  // Toggle active state
  const toggleCollapsible = (e) => {
    const item = e.target;
    const content = item.nextElementSibling;

    if (!item.classList.contains('active')) {
      collapseAllOpenContent();
    }

    item.classList.toggle('active');
    toggleContent(content);
  };

  return (
    <ul className='faq-list'>
      {list.map((item) => (
        <li className='faq-list-item'>
          <button
            className='collapsible heading-md'
            onClick={toggleCollapsible}
          >
            <span className='index heading-md'>#{item.id}</span>
            <span className='heading-md'>
              <span className='text-primary'>
                <b>Q:</b> &nbsp;
              </span>
              {item.question}
            </span>
            <FaPlusCircle size='30px' className='icon icon-plus' />
            <FaMinusCircle size='30px' className='icon icon-minus' />
          </button>
          <div className='content heading-sm'>
            <div>
              <span className='text-primary'>
                <b>A:</b>
              </span>{' '}
              {item.answer}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Collapsible;
