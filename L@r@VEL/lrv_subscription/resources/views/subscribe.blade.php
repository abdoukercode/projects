@extends('layouts.app')

@section('post-js')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">

                <h3>Subscribe to monthly plan</h3>

                <form action="/subscribe" method="POST">
                    {{csrf_field()}}

                    <input type="text" name="coupon">

                    <script
                            src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                            data-key="pk_test_RLbUnOztmL3olyqyg2YlbX8L"
                            data-amount="1100"
                            data-name="@bdou's SUBs"
                            data-description="Subscribe to @bdou's Blogs"
                            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                            data-label="Subscribe Now"
                            data-email="{{ auth()->check()?auth()->user()->email: null}}"
                            data-panel-label="Pay Monthly"
                            data-currency="eur"
                            data-locale="auto">
                    </script>
                </form>

            </div>
        </div>
    </div>
@endsection