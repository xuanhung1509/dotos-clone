import donate from '../../../../components/assets/images/support.webp';
import './Donate.style.scss';

function Donate() {
  return (
    <section className='donate'>
      <div className='container'>
        <div className='donate-img'>
          <img src={donate} alt='' />
        </div>
        <div className='donate-text'>
          <h2 className='heading-xl'>Donate</h2>
          <p>
            Do you like our project? Support us by{' '}
            <span className='text-primary'>
              <b>donating</b>
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Donate;
