# frozen_string_literal: true

class DownstreamChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'DataPoint'
  end

  def unsubscribed
    stop_stream_from 'DataPoint'
  end
end
